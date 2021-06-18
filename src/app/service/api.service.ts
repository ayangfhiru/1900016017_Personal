import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  message:any;
  // user:any;

  constructor(
    public auth: AngularFireAuth,
    public router: Router
  ) { }

  sendJenis(jns:any){
    this.message = jns;
  }
  getJenis(){
    return this.message;
  }

}
