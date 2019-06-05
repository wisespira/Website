import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { MaterialModule } from './material.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   // MaterialModule,
    AppRoutingModule,
    AngularFullpageModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
