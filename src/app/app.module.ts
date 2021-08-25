import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeadingComponent } from './home-heading/home-heading.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JordanOneSectionComponent } from './jordan-one-section/jordan-one-section.component';
import { AjOneSectionImagesComponent } from './aj-one-section-images/aj-one-section-images.component';
import { JordanThreeSectionComponent } from './jordan-three-section/jordan-three-section.component';
import { EllipseComponent } from './ellipse/ellipse.component';
import { JordanFourSectionComponent } from './jordan-four-section/jordan-four-section.component';
import { AirJordanOnePageComponent } from './air-jordan-one-page/air-jordan-one-page.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeadingComponent,
    HomePageComponent,
    JordanOneSectionComponent,
    AjOneSectionImagesComponent,
    JordanThreeSectionComponent,
    EllipseComponent,
    JordanFourSectionComponent,
    AirJordanOnePageComponent,
    BottomSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
