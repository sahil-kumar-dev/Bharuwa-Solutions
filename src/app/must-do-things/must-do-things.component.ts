import { Component, Input, OnInit } from '@angular/core';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { mustDoThings } from '../constants';
import { ThingsCardComponent } from './things-card/things-card.component';

@Component({
  selector: 'app-must-do-things',
  templateUrl: './must-do-things.component.html',
  styleUrls: ['./must-do-things.component.css'],
  imports: [
    ContentWrapperComponent,
    SectionHeaderComponent,
    ThingsCardComponent,
  ],
})
export class MustDoThingsComponent implements OnInit {
  @Input() mustDoThingsData: any[] = [];

  ngOnInit() {
    this.mustDoThingsData = mustDoThings;
  }
}
