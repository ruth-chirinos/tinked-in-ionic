import {Inject, Injectable} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {RecommendationModel} from '../../model/recommendation.model';
import {Observable} from 'rxjs';
import {RecommendationService} from '../recommendation/recommendation.service';
import {ClientI} from '../../model/interfaces/client-i.model';
import {JobPostModel} from '../../model/job-post.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService implements ClientI {
  constructor(
    @Inject(RecommendationService)
    private recommendationService: RecommendationService
  ) {}

  getRecommendations(user: UserModel): Observable<RecommendationModel> {
    console.log('Recommendations 1');
    return this.recommendationService.getRecommendations(user);
  }

  postLike(user: UserModel, job: JobPostModel): boolean {
    console.log('Like saved from client', job);
    this.updateRecommendationHistory(
      user,
      new Date().getTime(),
      job.uuid,
      null,
      null
    );
    return true;
  }

  disLike(user: UserModel, job: JobPostModel): boolean {
    console.log('Dislike saved  from client', job);
    this.updateRecommendationHistory(
      user,
      new Date().getTime(),
      null,
      job.uuid,
      null
    );
    return true;
  }

  passed(user: UserModel, job: JobPostModel): boolean {
    console.log('Passed saved  from client', job);
    this.updateRecommendationHistory(
      user,
      new Date().getTime(),
      null,
      null,
      job.uuid
    );
    return true;
  }

  private updateRecommendationHistory(
    user: UserModel,
    timestamp: number,
    likeUuid: string,
    disLikeUuid: string,
    passedUuid: string
  ) {
    const history = this.recommendationService.getHistory(user.uuid);
    if (likeUuid) {
      history.likes.add(likeUuid);
    }

    if (disLikeUuid) {
      history.disLikes.add(disLikeUuid);
      this.sendNotification();
    }

    if (passedUuid) {
      if (!history.passed.has(passedUuid)) {
        history.passed.set(passedUuid, 0);
      }
      history.passed.set(passedUuid, history.passed.get(passedUuid) + 1);
    }
    history.lastActionTimestamp = timestamp;
  }

  private sendNotification() {
    //TODO send notification
  }
}
