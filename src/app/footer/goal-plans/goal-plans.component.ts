import { Component, OnInit } from '@angular/core';
import { SectionHeaderComponent } from "../../shared/section-header/section-header.component";

@Component({
  selector: 'app-goal-plans',
  templateUrl: './goal-plans.component.html',
  styleUrls: ['./goal-plans.component.css'],
  imports: [SectionHeaderComponent]
})
export class GoalPlansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
