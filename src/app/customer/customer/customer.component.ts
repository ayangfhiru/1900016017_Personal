import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(
    public api: ApiService,
    public auth: AngularFireAuth,
    public firestore: AngularFirestore
  ) { }

  userData: any = {};
  ngOnInit(): void {
    this.auth.authState.subscribe((res:any)=>{
      if(res == null){
        window.location.replace('/');
      }
      this.firestore.collection("userData").doc(res.email).valueChanges().subscribe(result=>{
        this.userData = result;
      })
    })
  }

  logOut(){
    this.api.signOut();
  }

}
