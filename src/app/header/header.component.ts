import { Component, OnInit } from '@angular/core';
import { ContentWrapperComponent } from "../content-wrapper/content-wrapper.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [ContentWrapperComponent]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
