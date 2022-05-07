import {RouterModule, Routes} from "@angular/router";
import {PublicComponent} from "./public.component";
import {PrivateComponent} from "../private/private.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', component: PublicComponent
  },
  {
    path: 'private', component: PrivateComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule{}
