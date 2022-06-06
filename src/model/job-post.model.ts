import {JobPostCard} from '../pages/home/entity/job-post.card';

export class JobPostModel {
    uuid?: string;
    card: JobPostCard;
    country: string;
    city: string;
    accuracy: number;
    random: boolean;
    tags: Array<string>;

    commonWithUser?: number;
}
