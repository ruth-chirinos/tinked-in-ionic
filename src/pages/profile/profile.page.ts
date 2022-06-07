import { AfterViewInit, Component, Inject } from '@angular/core';
import { BackI } from '../../model/interfaces/back-i.model';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements AfterViewInit, BackI {
  private likedJobs: Array<{ card }> = [];

  constructor(@Inject(ClientService) private client: ClientService) {}

  ngAfterViewInit(): void {
    this.likedJobs = this.client.getLikedJobs();
  }

  back() {}
}
