import { AccessSpaModule } from './../../../access-spa/src/lib/access-spa.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageStartComponent } from './package-start/package-start.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccessSpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


@NgModule({})
export class PackageSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}

