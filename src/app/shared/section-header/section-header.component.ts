import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css'],
})
export class SectionHeaderComponent implements OnInit {
  constructor() {}

  @Input({ required: true }) title!: string;
  @Input({ required: true }) buttonText!: string;

  ngOnInit() {}
}
