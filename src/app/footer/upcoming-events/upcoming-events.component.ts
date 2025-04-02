import { CommonModule } from '@angular/common';
import { upcomingEvents } from './../../constants/index';
import { Component, OnInit } from '@angular/core';
import { SectionHeaderComponent } from "../../shared/section-header/section-header.component";

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
  imports: [CommonModule, SectionHeaderComponent],
})
export class UpcomingEventsComponent implements OnInit {
  upcomingEvents = upcomingEvents;

  ngOnInit() {}
}
