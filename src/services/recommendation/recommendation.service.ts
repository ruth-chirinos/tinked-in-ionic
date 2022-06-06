import {Injectable} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {RecommendationHistory, RecommendationModel} from '../../model/recommendation.model';
import {Observable, of} from 'rxjs';
import {RecomendationI} from '../../model/interfaces/recomendation-i.model';
import {JobPostModel} from '../../model/job-post.model';

@Injectable({
    providedIn: 'root'
})
export class RecommendationService implements RecomendationI {
    //Key: userId
    history: Map<string, RecommendationHistory> = new Map<string,
        RecommendationHistory>();

    constructor() {
    }

    getRecommendations(user: UserModel): Observable<RecommendationModel> {
        const json: Array<JobPostModel> = [
            {
                uuid: '1',
                country: 'Bolivia',
                city: 'La Paz',
                accuracy: 0.8,
                random: false,
                tags: ['Android', 'ML', 'Ionic'],
                card: {
                    image:
                        'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost1.jpg?alt=media',
                    title: 'Demo card 1',
                    shortDescription: 'This is a demo for Tinder like swipe cards'
                }
            },
            {
                uuid: '2',
                country: 'Bolivia',
                city: 'La Paz',
                accuracy: 0.78,
                random: false,
                tags: ['Android', 'ML', 'Ionic'],
                card: {
                    image:
                        'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost2.jpg?alt=media',
                    title: 'Demo card 2',
                    shortDescription: 'This is a demo for Tinder like swipe cards'
                }
            },
            {
                uuid: '3',
                country: 'Bolivia',
                city: 'La Paz',
                accuracy: 0.8,
                random: false,
                tags: ['Android', 'ML', 'Ionic'],
                card: {
                    image:
                        'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost3.jpg?alt=media',
                    title: 'Demo card 3',
                    shortDescription: 'This is a demo for Tinder like swipe cards'
                }
            }
        ];
        return of(new RecommendationModel(json));
    }

    getHistory(userUuid: string): RecommendationHistory {
        if (!this.history.has(userUuid)) {
            this.history.set(userUuid, new RecommendationHistory(userUuid));
        }
        return this.history.get(userUuid);
    }
}
