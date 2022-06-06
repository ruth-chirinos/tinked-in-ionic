import {AfterViewInit, Component} from '@angular/core';
import {BackI} from '../../model/interfaces/back-i.model';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements AfterViewInit, BackI {
  constructor() {}

  ngAfterViewInit(): void {}

  back() {}
}
