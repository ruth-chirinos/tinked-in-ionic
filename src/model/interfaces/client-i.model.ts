import {Observable} from 'rxjs';
import {RecommendationModel} from '../recommendation.model';
import {UserModel} from '../user.model';
import {JobPostModel} from '../job-post.model';

export interface ClientI {
  getRecommendations(user: UserModel): Observable<RecommendationModel>;

  postLike(user: UserModel, job: JobPostModel): boolean;

  disLike(user: UserModel, job: JobPostModel): boolean;

  passed(user: UserModel, job: JobPostModel): boolean;
}
