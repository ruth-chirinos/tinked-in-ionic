import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    QueryList,
    Renderer2,
    SimpleChanges,
    ViewChildren
} from '@angular/core';
import {ImageUtils} from '../../utils/image.utils';
import {JobPostCard} from '../../pages/home/entity/job-post.card';

@Component({
    selector: 'app-tinder-ui',
    templateUrl: './tinder-ui.component.html',
    styleUrls: ['./tinder-ui.component.scss'],
})
export class TinderUiComponent implements OnChanges, AfterViewInit {
    // Ref: https://betterprogramming.pub/tinder-like-swiper-ui-for-angular-ionic-4-50c401d6b9fb
    @Input('cards') cards: Array<JobPostCard> = [];

    originalCards: Array<JobPostCard> = [];
    currentPosition = 0;

    @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;

    tinderCardsArray: Array<ElementRef>;

    moveOutWidth: number; // value in pixels that a card needs to travel to dissapear from screen
    shiftRequired: boolean; // state variable that indicates we need to remove the top card of the stack
    transitionInProgress: boolean; // state variable that indicates currently there is transition on-going
    heartVisible: boolean;
    crossVisible: boolean;

    @Output() likeEvent = new EventEmitter<JobPostCard>();
    @Output() dislikeEvent = new EventEmitter<JobPostCard>();
    @Output() passEvent = new EventEmitter<JobPostCard>();
    @Output() moreInfoEvent = new EventEmitter<JobPostCard>();

    constructor(private renderer: Renderer2) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.currentPosition = 0;
        this.originalCards = this.cards;
    }

    ngAfterViewInit() {
        this.moveOutWidth = document.documentElement.clientWidth * 1.5;
        this.tinderCardsArray = this.tinderCards.toArray();
        this.tinderCards.changes.subscribe(() => {
            this.tinderCardsArray = this.tinderCards.toArray();
        });
    }

    moreInfo(event: any) {
        event.preventDefault();
        if (this.cards.length) {
            this.moreInfoEvent.emit(this.cards[0]);
        }
    }

    userClickedButton(event: any, heart: boolean) {
        event.preventDefault();
        if (!this.cards.length) {
            return false;
        }
        if (heart) {
            this.tinderCardsArray[0].nativeElement.style.transform = 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)';
            this.like(this.cards[0]);
            this.toggleChoiceIndicator(false, true);
        } else {
            this.tinderCardsArray[0].nativeElement.style.transform = 'translate(-' + this.moveOutWidth + 'px, -100px) rotate(30deg)';
            this.disLike(this.cards[0]);
            this.toggleChoiceIndicator(true, false);
        }
        this.shiftRequired = true;
        this.transitionInProgress = true;
        this.next(null);
    }

    toggleChoiceIndicator(cross: boolean, heart: boolean) {
        this.crossVisible = cross;
        this.heartVisible = heart;
    }

    handleShift() {
        this.transitionInProgress = false;
        this.toggleChoiceIndicator(false, false);
        if (this.shiftRequired) {
            this.shiftRequired = false;
        }
    }

    handleUnshift() {
        this.transitionInProgress = false;
        this.toggleChoiceIndicator(false, false);
        if (this.shiftRequired) {
            this.shiftRequired = false;
        }
    }

    // Start tracking movement
    handlePan(event: any) {
        if (event.deltaX === 0 || (event.center.x === 0 && event.center.y === 0) || !this.cards.length) {
            return;
        }

        if (this.transitionInProgress) {
            this.handleShift();
        }

        this.renderer.addClass(this.tinderCardsArray[0].nativeElement, 'moving');
        if (Math.abs(event.deltaX) > 50) {
            if (event.deltaX > 0) {
                this.toggleChoiceIndicator(false, true);
            }
            if (event.deltaX < 0) {
                this.toggleChoiceIndicator(true, false);
            }
        }
        const xMulti = event.deltaX * 0.03;
        const yMulti = event.deltaY / 80;
        const rotate = xMulti * yMulti;
        this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)');
        this.shiftRequired = true;
    }

    // End tracking movement
    handlePanEnd(event: any) {
        this.toggleChoiceIndicator(false, false);

        if (!this.cards.length) {
            return;
        }
        this.renderer.removeClass(this.tinderCardsArray[0].nativeElement, 'moving');

        const keep = Math.abs(event.deltaX) < 100 && Math.abs(event.deltaY) < 100;
        if (keep) {
            this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', '');
            this.shiftRequired = false;
        } else if (Math.abs(event.velocityX) > 0.5) {
            if (event.deltaX > 20) {
                this.like(this.cards[0]);
            } else {
                this.disLike(this.cards[0]);
            }
            this.next(event);
        } else {
            if (event.deltaY > 20) {
                this.passed(this.cards[0]);
                this.next(event);
            } else {
                this.previous(event);
            }
        }
        this.transitionInProgress = true;
    }

    next(event: any) {
        this.cards.shift();
        this.currentPosition++;

        if (event) {
            const endX = Math.max(Math.abs(event.velocityX) * this.moveOutWidth, this.moveOutWidth);
            const toX = event.deltaX > 0 ? endX : -endX;
            const endY = Math.abs(event.velocityY) * this.moveOutWidth;
            const toY = event.deltaY > 0 ? endY : -endY;
            const xMulti = event.deltaX * 0.03;
            const yMulti = event.deltaY / 80;
            const rotate = xMulti * yMulti;
            this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)');
        }
        this.shiftRequired = true;
    }

    previous(event: any) {
        if (this.currentPosition > 0) {
            this.currentPosition--;
            const previousCard = this.originalCards[this.currentPosition];
            this.cards.unshift(previousCard);
        }
    }

    like(card: JobPostCard) {
        this.likeEvent.emit(card);
    }

    disLike(card: JobPostCard) {
        this.dislikeEvent.emit(card);
    }

    passed(card: JobPostCard) {
        this.passEvent.emit(card);
    }

    getImageFilePath() {
        return ImageUtils.getImageFilePath();
    }
}
