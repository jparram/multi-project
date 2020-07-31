import { PropertyStartComponent } from './../../projects/property/src/app/property-start/property-start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlStartComponent } from 'projects/general-liability/src/app/gl-start/gl-start.component';
import { PackageStartComponent } from 'projects/package/src/app/package-start/package-start.component';


const routes: Routes = [
 { path: 'access/gl', component: GlStartComponent },
 { path: 'access/property', component: PropertyStartComponent },
 { path: 'access/package', component: PackageStartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
