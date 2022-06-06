import {Inject, Injectable} from '@angular/core';
import {LinkedInService} from '../../../services/linked-in/linked-in.service';
import {LinkedInI} from '../../../model/interfaces/linked-in-i.model';
import {ClientService} from '../../../services/client/client.service';
import {ClientI} from '../../../model/interfaces/client-i.model';
import {JobUtils} from '../../../utils/job.utils';
import {CandidateUserModel, UserModel} from '../../../model/user.model';
import {RecommendationModel} from '../../../model/recommendation.model';
import {Observable, of} from 'rxjs';
import {HomeRepositoryI} from './home-i.repository';
import {map} from 'rxjs/operators';
import {JobPostCard} from '../entity/job-post.card';
import {MockClientService} from '../../../services/client/mock-client.service';

@Injectable({
    providedIn: 'root'
})
export class HomeRepository implements HomeRepositoryI {
    currentUser: UserModel;
    cards: Array<JobPostCard> = [];
    recommendations: RecommendationModel;

    constructor(@Inject(LinkedInService) private linkedInService: LinkedInI,
                @Inject(MockClientService) private clientService: ClientI) {
        this.currentUser = this.linkedInService.login(null);
    }

    getCards(): Observable<Array<JobPostCard>> {
        if (this.currentUser instanceof CandidateUserModel) {
            return this.clientService.getRecommendations(this.currentUser).pipe(
                map((recommendation) => {
                    console.log(recommendation);
                    this.recommendations = recommendation;
                    return recommendation.getCards();
                }),
            );
        } else {
            return of([]);
        }
    }

    like(card: JobPostCard) {
        this.clientService.postLike(
            this.currentUser,
            JobUtils.mapJobPostCardToJobPostModel(this.recommendations, card)
        );
    }

    dislike(card: JobPostCard) {
        this.clientService.disLike(
            this.currentUser,
            JobUtils.mapJobPostCardToJobPostModel(this.recommendations, card)
        );
    }

    passed(card: JobPostCard) {
        this.clientService.passed(
            this.currentUser,
            JobUtils.mapJobPostCardToJobPostModel(this.recommendations, card)
        );
    }
}
