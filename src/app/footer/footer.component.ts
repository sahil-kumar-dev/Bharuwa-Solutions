import { Component, OnInit } from '@angular/core';
import { ContentWrapperComponent } from "../content-wrapper/content-wrapper.component";
import { LatestNewsComponent } from "./latest-news/latest-news.component";
import { UpcomingEventsComponent } from "./upcoming-events/upcoming-events.component";
import { GoalPlansComponent } from "./goal-plans/goal-plans.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [ContentWrapperComponent, LatestNewsComponent, UpcomingEventsComponent, GoalPlansComponent]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
