import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { ChartsModule } from 'ng2-charts';
//import { MaterialModule } from './material.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { PiechartComponent } from './piechart/piechart.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { TimelineComponent } from './timeline/timeline.component';
import { ResumeContactComponent } from './resume-contact/resume-contact.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule }   from '@angular/forms';
import { PhonePageComponent } from './phone-page/phone-page.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    NavbarComponent,
    TimelineComponent,
    ResumeContactComponent,
    PhonePageComponent,
    SliderComponent
  ],
  imports: [
  FormsModule,
  BrowserAnimationsModule,
  MglTimelineModule,
  ChartsModule,
  BrowserModule,
  PdfViewerModule,
   // MaterialModule,
  AppRoutingModule,
  AngularFullpageModule,
  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
