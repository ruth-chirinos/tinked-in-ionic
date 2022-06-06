import {AfterViewInit, Component} from '@angular/core';
import {GuideModel} from '../../model/guide.model';
import {TranslateService} from '@ngx-translate/core';
import {ImageUtils} from '../../utils/image.utils';

@Component({
  selector: 'app-guide',
  templateUrl: 'guide.page.html',
  styleUrls: ['guide.page.scss']
})
export class GuidePage implements AfterViewInit {
  slides: Array<GuideModel> = [];

  constructor(private translate: TranslateService) {}

  ngAfterViewInit(): void {
    this.loadSlides();
  }

  loadSlides() {
    this.slides.push(
      new GuideModel(
        ImageUtils.getImageFilePath() + 'assets/icon/logo-white.png?raw=true',
        this.translate.instant('pages.guide.slide1')
      )
    );
    this.slides.push(
      new GuideModel(
        ImageUtils.getImageFilePath() +
          'assets/icon/guide-chat-white.png?raw=true',
        this.translate.instant('pages.guide.slide2')
      )
    );
    this.slides.push(
      new GuideModel(
        ImageUtils.getImageFilePath() +
          'assets/icon/guide-cv-white.png?raw=true',
        this.translate.instant('pages.guide.slide3')
      )
    );
    this.slides.push(
      new GuideModel(
        ImageUtils.getImageFilePath() +
          'assets/icon/guide-alert-white.png?raw=true',
        this.translate.instant('pages.guide.slide4')
      )
    );
    this.slides.push(
      new GuideModel(
        ImageUtils.getImageFilePath() + 'assets/icon/logo-white-lg.png?raw=true'
      )
    );
  }
}
