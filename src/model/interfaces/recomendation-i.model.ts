import {Observable} from 'rxjs';
import {RecommendationModel} from '../recommendation.model';
import {UserModel} from '../user.model';

export interface RecomendationI {
  getRecommendations(user: UserModel): Observable<RecommendationModel>;
}
