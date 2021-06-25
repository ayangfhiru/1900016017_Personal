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

  message:any;
  sendJenis(jns:any){
    this.message = jns;
  }
  getJenis(){
    return this.message;
  }

  // All  
  getDataPlants(){
    return this.firestore.collection('plants').valueChanges({idField : 'id'});
  }

  signOut(){
    return this.auth.signOut().then(res=>{
      this.router.navigate(['login']);
    })
  }

}
