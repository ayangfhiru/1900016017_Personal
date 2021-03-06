import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { EditDataComponent } from '../edit-data/edit-data.component';
import { KonfirmasiComponent } from '../konfirmasi/konfirmasi.component';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.scss']
})
export class ProdukComponent implements OnInit {

  constructor(
    public api: ApiService,
    public auth: AngularFireAuth,
    public dialog: MatDialog, 
    public firestore: AngularFirestore
    ) {
      
  }

  userData: any = {};
  ngOnInit(): void {
    this.auth.authState.subscribe((res:any)=>{
      this.firestore.collection("userData").doc(res.email).valueChanges().subscribe(result=>{
        this.userData = result;
      })
    })
    this.getPlants();
  }

  alert: boolean = false;
  messageAlert:any;
  plants: any = [];
  
  getPlants(){
    this.api.getDataPlants().subscribe(res=>{
      this.plants = res
      // console.log(res)
    })
  }

  editPlants(plants:any, id:any){
    // console.log(id)
    plants['id'] = id
    const dialogRef = this.dialog.open(EditDataComponent,{
      width: '550px',
      data: plants
    });
  }

  infoPlants(id:any){
    alert("Belum Ada")
  }

  hapusPlants(id:any){
    const dialogRef = this.dialog.open(KonfirmasiComponent,{
      width: '550px',
      data: id
    })
  }

}
