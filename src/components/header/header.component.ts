import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import {ImageUtils} from '../../utils/image.utils';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
    @Output() profileClickEvent = new EventEmitter();
    @Output() homeClickEvent = new EventEmitter();
    @Output() chatClickEvent = new EventEmitter();

    constructor() {
    }

    ngAfterViewInit(): void {
    }

    profileClick() {
        this.profileClickEvent.emit();
    }

    homeClick() {
        this.homeClickEvent.emit();
    }

    chatClick() {
        this.chatClickEvent.emit();
    }

    getImageFilePath() {
        return ImageUtils.getImageFilePath();
    }
}
