import {Injectable} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {RecommendationModel} from '../../model/recommendation.model';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ClientI} from '../../model/interfaces/client-i.model';
import {JobPostModel} from '../../model/job-post.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MockClientService implements ClientI {
    constructor(private http: HttpClient) {
    }

    getRecommendations(user: UserModel): Observable<RecommendationModel> {
        return this.http
            .get<Array<JobPostModel>>('/assets/mocked/jobs.json')
            .pipe(map(json => new RecommendationModel(json)));
    }

    postLike(userModel: UserModel, job: JobPostModel): boolean {
        console.log('Like saved', job);
        return true;
    }

    disLike(userModel: UserModel, job: JobPostModel): boolean {
        console.log('Dislike saved', job);
        return true;
    }

    passed(userModel: UserModel, job: JobPostModel): boolean {
        console.log('Passed saved', job);
        return true;
    }
}
