import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";

const routes: Routes = [{
  path:'product/list',
  component:ProductListComponent,
},{
  path:'product/create',
  component:ProductCreateComponent
},{
  path:'product/list/delete/:id',
  component:ProductDeleteComponent
},{
  path:'product/list/edit/:id',
  component:ProductEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
