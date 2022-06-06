import {JobPostModel} from './job-post.model';
import {JobPostCard} from '../pages/home/entity/job-post.card';

export class RecommendationModel {
    uuid?: string;
    timestamp: number;
    fromCache: boolean;
    recommendedPosts: Array<JobPostModel>;

    constructor(recommendedPosts: Array<JobPostModel>) {
        this.timestamp = new Date().getTime();
        this.fromCache = false;
        this.recommendedPosts = recommendedPosts;
    }

    update(recommendedPosts: Array<JobPostModel>) {
        this.recommendedPosts = recommendedPosts;
    }

    getCards(): Array<JobPostCard> {
        return this.recommendedPosts.map(post => {
            post.card.uuid = post.uuid;
            return post.card;
        });
    }
}

export class RecommendationHistory {
    userUuid: string;
    // Uuid of JobPosts
    likes: Set<string>;
    disLikes: Set<string>;

    // Key; Uuid of JobPost, val: Number of occurrences
    passed: Map<string, number>;
    lastActionTimestamp: number;

    constructor(userUuid: string) {
        this.userUuid = userUuid;
        this.likes = new Set<string>();
        this.disLikes = new Set<string>();
        this.passed = new Map<string, number>();
        this.lastActionTimestamp = new Date().getTime();
    }
}
