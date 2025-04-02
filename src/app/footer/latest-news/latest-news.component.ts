import { latestNews } from './../../constants/index';
import { Component, OnInit } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
  imports: [SectionHeaderComponent],
})
export class LatestNewsComponent implements OnInit {
  latestNewsData: {
    id: number;
    image: string;
    title: string;
  }[] = latestNews;

  ngOnInit() {}
}
