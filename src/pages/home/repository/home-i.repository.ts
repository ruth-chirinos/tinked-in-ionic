import {Observable} from 'rxjs';
import {JobPostCard} from '../entity/job-post.card';

export interface HomeRepositoryI {
    getCards(): Observable<Array<JobPostCard>>;

    like(card: JobPostCard);

    dislike(card: JobPostCard);

    passed(card: JobPostCard);
}
