import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css'],
})
export class CityCardComponent implements OnInit {
  constructor() {}

  @Input() city!: {
    id: number;
    name: string;
    image: string;
    alt: string;
  };


  ngOnInit() {}
}
