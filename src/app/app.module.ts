import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
//import { MaterialModule } from './material.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { PiechartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent
  ],
  imports: [
  ChartsModule,
    BrowserModule,
   // MaterialModule,
    AppRoutingModule,
    AngularFullpageModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
