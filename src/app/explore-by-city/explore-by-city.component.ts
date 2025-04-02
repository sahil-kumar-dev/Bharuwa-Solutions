import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { exploreByCity } from '../constants';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { CityCardComponent } from './city-card/city-card.component';

@Component({
  selector: 'app-explore-by-city',
  templateUrl: './explore-by-city.component.html',
  styleUrls: ['./explore-by-city.component.css'],
  imports: [
    CityCardComponent,
    ContentWrapperComponent,
    NgFor,
    SectionHeaderComponent,
  ],
})
export class ExploreByCityComponent implements OnInit {
  citiesData!: {
    id: number;
    name: string;
    image: string;
    alt: string;
  }[];
  ngOnInit() {
    this.citiesData = exploreByCity;
  }
}
