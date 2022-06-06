import {Observable} from 'rxjs';
import {JobPostCard} from '../entity/job-post.card';

export interface HomePresenterI {
    getCards(): Observable<Array<JobPostCard>>;

    like(card: JobPostCard): boolean;

    dislike(card: JobPostCard): boolean;

    passed(card: JobPostCard): boolean;
}
