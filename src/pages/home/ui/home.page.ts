import {AfterViewInit, Component, Inject} from '@angular/core';
import {HomeNavigationI} from '../../../model/interfaces/home-navigation-i.model';
import {NavController} from '@ionic/angular';
import {HomePresenterI} from '../use-cases/home.presenter';
import {HomeUseCases} from '../use-cases/home.use-cases';
import {JobPostCard} from '../entity/job-post.card';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements AfterViewInit, HomeNavigationI {
    cards: Array<JobPostCard> = [];

    constructor(private navCtrl: NavController, @Inject(HomeUseCases) private presenter: HomePresenterI) {
        this.cards = [];
    }

    ngAfterViewInit(): void {
        this.getCards();
    }

    getCards() {
        this.presenter.getCards().subscribe(data => {
            this.cards = data;
        }, error => {

        });
    }

    like(card: JobPostCard) {
        this.presenter.like(card);
    }

    dislike(card: JobPostCard) {
        this.presenter.dislike(card);
    }

    passed(card: JobPostCard) {
        this.presenter.passed(card);
    }

    goToChat() {
        this.navCtrl.navigateForward('chat').then();
    }

    goToHome() {
        this.navCtrl.navigateForward('guide').then();
    }

    goToProfile() {
        this.navCtrl.navigateForward('profile').then();
    }
}
