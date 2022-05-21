import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicComponent} from "./public.component";
import {PublicRoutingModule} from "./public-routing.module";
import {MDBBootstrapModulesPro} from "ng-uikit-pro-standard";
import {CommonsModule} from "../commons/commons.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalService} from "../service/modal.service";

@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    CommonsModule,
    ReactiveFormsModule
  ],
  providers: [
    ModalService
  ]
})
export class PublicModule { }
