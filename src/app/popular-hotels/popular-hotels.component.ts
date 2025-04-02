import { popularHotels } from './../constants/index';
import { Component, OnInit } from '@angular/core';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-hotels',
  templateUrl: './popular-hotels.component.html',
  styleUrls: ['./popular-hotels.component.css'],
  imports: [ContentWrapperComponent, SectionHeaderComponent, CommonModule],
})
export class PopularHotelsComponent implements OnInit {
  popularHotels = popularHotels;

  ngOnInit() {}
}
