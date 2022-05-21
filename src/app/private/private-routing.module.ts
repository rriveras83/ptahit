import {RouterModule, Routes} from "@angular/router";
import {PrivateComponent} from "./private.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', component: PrivateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule{}
