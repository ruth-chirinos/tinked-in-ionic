import {AnalyticsServiceI} from './analytics-i.service';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService implements AnalyticsServiceI {
    private likedCount = 0;
    private dislikedCount = 0;
    private passedCount = 0;

    disliked() {
        this.dislikedCount++;
    }

    liked() {
        this.likedCount++;
    }

    passed() {
        this.passedCount++;
    }

}
