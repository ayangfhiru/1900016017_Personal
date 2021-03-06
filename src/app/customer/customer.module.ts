import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProdukComponent } from './produk/produk.component';
import { materialModule } from 'src/style/material/material';
import { CustomerComponent } from './customer/customer.component';
import { JenisTanamanComponent } from './jenis-tanaman/jenis-tanaman.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { DetailProdukComponent } from './detail-produk/detail-produk.component';

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
      },
      {
        path:'produk',
        component: DetailProdukComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    ProdukComponent,
    CustomerComponent,
    JenisTanamanComponent,
    DetailProdukComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebase),
    CommonModule,
    materialModule
  ]
})
export class CustomerModule { }
