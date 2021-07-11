import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(
    public router: Router,
    public auth: AngularFireAuth,
    public firestore: AngularFirestore
  ) { }

  plants:any;
  sendJenis(jns:any){
    //produk component
    this.plants = jns;
  }
  getJenis(){
    //jenis-tanaman komponent
    return this.plants;
  }
  
  getDataPlants(){
    //produk component
    return this.firestore.collection('plants').valueChanges({idField : 'id'});
  }

  idPlants:any;
  sendIdPlants(id:any){
    //produk komponent
    this.idPlants = id;
  }
  getIdPlants(){
    //detail-produk komponent
    return this.idPlants;
  }

  signOut(){
    return this.auth.signOut().then(res=>{
      this.router.navigate(['login']);
    })
  }

}
