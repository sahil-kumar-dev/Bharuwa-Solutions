import { Component, OnInit } from '@angular/core';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { DestinationsCardComponent } from './destinations-card/destinations-card.component';
import { topDestinations } from '../constants';

@Component({
  selector: 'app-top-destinations',
  templateUrl: './top-destinations.component.html',
  styleUrls: ['./top-destinations.component.css'],
  imports: [
    ContentWrapperComponent,
    SectionHeaderComponent,
    DestinationsCardComponent,
  ],
})
export class TopDestinationsComponent implements OnInit {
  topDestinationsData: {
    id: number;
    image: string;
    name: string;
    place: string;
    rating: number;
    reviews: number;
  }[] = topDestinations;

  ngOnInit() {}
}
