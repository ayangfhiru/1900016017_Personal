import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModule } from 'src/style/material/material';
import { ProdukComponent } from './produk/produk.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'produk',
        component: ProdukComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProdukComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    materialModule
  ]
})
export class AdminModule { }
