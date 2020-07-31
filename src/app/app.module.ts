import { PropertySharedModule } from './../../projects/property/src/app/app.module';
import { PackageSharedModule } from './../../projects/package/src/app/app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralLiabilitySharedModule } from 'projects/general-liability/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralLiabilitySharedModule,
    PackageSharedModule,
    PropertySharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
