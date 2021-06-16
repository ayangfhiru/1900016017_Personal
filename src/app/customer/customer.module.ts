import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProdukComponent } from './produk/produk.component';
import { materialModule } from 'src/style/material/material';
import { CustomerComponent } from './customer/customer.component';
import { JenisTanamanComponent } from './jenis-tanaman/jenis-tanaman.component';

const routes : Routes = [
  {
    path:'',
    component: CustomerComponent,
    children:[
      {
        path:'',
        component: ProdukComponent
      },
      {
        path:'jenis',
        component: JenisTanamanComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    ProdukComponent,
    CustomerComponent,
    JenisTanamanComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    materialModule
  ]
})
export class CustomerModule { }
