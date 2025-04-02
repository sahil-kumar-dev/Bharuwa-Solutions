import { navBtn } from './../constants/index';
import { Component, OnInit } from '@angular/core';
import { CTAButtons } from '../constants';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';

@Component({
  selector: 'app-ctas',
  templateUrl: './ctas.component.html',
  styleUrls: ['./ctas.component.css'],
  imports: [ContentWrapperComponent],
})
export class CtasComponent implements OnInit {
  ctaButtons = CTAButtons;
  navBtn = navBtn;

  ngOnInit() {}
}
