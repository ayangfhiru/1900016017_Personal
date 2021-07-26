import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModule } from 'src/style/material/material';
import { ProdukComponent } from './produk/produk.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { TambahDataComponent } from './tambah-data/tambah-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDataComponent } from './edit-data/edit-data.component';
import { RegisterComponent } from '../auth/register/register.component';

const routes : Routes = [
  {
    // admin
    path:'',
    component: AdminComponent,
    children: [
      {
        // home
        path:'',
        component: HomeComponent
      },
      {
        path:'produk',
        component: ProdukComponent
      },
      {
        path:'add_data',
        component: TambahDataComponent
      },
      {
        path:'register-admin',
        component: RegisterComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProdukComponent,
    AdminComponent,
    HomeComponent,
    TambahDataComponent,
    EditDataComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebase),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    materialModule
  ]
})
export class AdminModule { }
