import {UserModel} from '../user.model';

export interface LinkedInI {
  login(email: string): UserModel;

  //register(): UserModel;
}
