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

  IdPlants:any;
  sendPlants(plant:any){
    this.IdPlants = plant;
    console.log("API",this.IdPlants)
  }
  getPlants(){
    return this.IdPlants;
  }

  signOut(){
    return this.auth.signOut().then(res =>{
      localStorage.removeItem("TokenPlant");
      this.router.navigate(['login']);
    })
  }

}
