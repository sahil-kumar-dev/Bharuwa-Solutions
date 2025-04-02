import { Component, OnInit } from '@angular/core';
import { ContentWrapperComponent } from "../content-wrapper/content-wrapper.component";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  imports: [ContentWrapperComponent]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
