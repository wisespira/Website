import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    NavbarComponent,
    TimelineComponent
  ],
  imports: [
  BrowserAnimationsModule,
  MglTimelineModule,
  ChartsModule,
  BrowserModule,
   // MaterialModule,
  AppRoutingModule,
  AngularFullpageModule,
  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
