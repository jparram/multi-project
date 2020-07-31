import { AccessSpaModule } from './../../../access-spa/src/lib/access-spa.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlStartComponent } from './gl-start/gl-start.component';

@NgModule({
  declarations: [
    AppComponent,
    GlStartComponent
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
export class GeneralLiabilitySharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}
