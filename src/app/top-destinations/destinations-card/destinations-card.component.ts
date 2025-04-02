import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations-card',
  templateUrl: './destinations-card.component.html',
  styleUrls: ['./destinations-card.component.css'],
})
export class DestinationsCardComponent implements OnInit {
  @Input() data!: {
    id: number;
    image: string;
    name: string;
    place: string;
    rating: number;
    reviews: number;
  };

  ngOnInit() {}
}
