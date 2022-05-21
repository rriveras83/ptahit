import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import {MDBBootstrapModulesPro} from "ng-uikit-pro-standard";

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  exports: [
    ModalComponent
  ]
})
export class CommonsModule { }
