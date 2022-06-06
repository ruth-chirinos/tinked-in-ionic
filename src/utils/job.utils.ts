import {RecommendationModel} from '../model/recommendation.model';
import {JobPostCard} from '../pages/home/entity/job-post.card';
import {JobPostModel} from '../model/job-post.model';

export class JobUtils {
    static mapJobPostCardToJobPostModel(
        recommendations: RecommendationModel,
        card: JobPostCard
    ): JobPostModel {
        return recommendations.recommendedPosts.find(rec => rec.uuid === card.uuid);
    }
}
