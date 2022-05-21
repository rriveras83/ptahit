import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import {MDBBootstrapModulesPro} from "ng-uikit-pro-standard";
import {PrivateRoutingModule} from "./private-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MDBBootstrapModulesPro.forRoot()
  ]
})
export class PrivateModule { }
