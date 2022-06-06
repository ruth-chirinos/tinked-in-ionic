import {AfterViewInit, Component} from '@angular/core';
import {BackI} from '../../model/interfaces/back-i.model';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatPage implements AfterViewInit, BackI {
  constructor() {}

  ngAfterViewInit(): void {}

  back() {}
}
