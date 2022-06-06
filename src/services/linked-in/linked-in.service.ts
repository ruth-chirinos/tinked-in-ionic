import {Injectable} from '@angular/core';
import {LinkedInI} from '../../model/interfaces/linked-in-i.model';
import {CandidateUserModel, UserModel} from '../../model/user.model';
import {JobPostModel} from '../../model/job-post.model';

@Injectable({
    providedIn: 'root'
})
export class LinkedInService implements LinkedInI {
    constructor() {
    }

    login(email: string): UserModel {
        const newUser: UserModel = new CandidateUserModel(
            '123',
            'Juan Perez',
            'test@upb.edu',
            'Bolivia',
            'La Paz',
            [],
            true
        );
        return newUser;
    }

    register(): UserModel {
        return null;
    }

    apply(job: JobPostModel): boolean {
        return null;
    }
}
