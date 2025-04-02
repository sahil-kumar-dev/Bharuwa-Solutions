import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExploreByCityComponent } from './explore-by-city/explore-by-city.component';
import { MustDoThingsComponent } from './must-do-things/must-do-things.component';
import { TopDestinationsComponent } from "./top-destinations/top-destinations.component";
import { FooterComponent } from "./footer/footer.component";
import { PopularHotelsComponent } from "./popular-hotels/popular-hotels.component";
import { CtasComponent } from "./ctas/ctas.component";
import { BannerComponent } from "./banner/banner.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [ExploreByCityComponent, MustDoThingsComponent, TopDestinationsComponent, FooterComponent, PopularHotelsComponent, CtasComponent, BannerComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bharuwa-solutions';
}
