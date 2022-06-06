import {HomePresenterI} from './home.presenter';
import {Observable} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {HomeRepositoryI} from '../repository/home-i.repository';
import {HomeRepository} from '../repository/home.repository';
import {AnalyticsService} from '../../../services/analytics/analytics.service';
import {AnalyticsServiceI} from '../../../services/analytics/analytics-i.service';
import {JobPostCard} from '../entity/job-post.card';

@Injectable({
    providedIn: 'root'
})
export class HomeUseCases implements HomePresenterI {

    constructor(
        @Inject(HomeRepository) private repository: HomeRepositoryI,
        @Inject(AnalyticsService) private analytics: AnalyticsServiceI) {
    }

    getCards(): Observable<Array<JobPostCard>> {
        return this.repository.getCards();
    }

    dislike(card: JobPostCard): boolean {
        this.analytics.disliked();
        return this.repository.dislike(card);
    }

    like(card: JobPostCard): boolean {
        this.analytics.liked();
        return this.repository.like(card);
    }

    passed(card: JobPostCard): boolean {
        this.analytics.passed();
        return this.repository.passed(card);
    }

}
