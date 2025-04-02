import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-things-card',
  templateUrl: './things-card.component.html',
  styleUrls: ['./things-card.component.css'],
})
export class ThingsCardComponent implements OnInit {
  @Input() data!: {
    id: number;
    image: string;
    name: string;
    description: string;
  };

  ngOnInit() {}
}
