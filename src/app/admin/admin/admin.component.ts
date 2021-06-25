import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public api: ApiService,
    public auth: AngularFireAuth,
    public firetore: AngularFirestore
  ) { }

  userData: any = {};
  ngOnInit(): void {
    this.auth.authState.subscribe((res:any)=>{
      this.firetore.collection('userData').doc(res.email).valueChanges().subscribe(result=>{
        this.userData = result;
      })
    })
  }

  logOut(){
    this.api.signOut();
  }

  list = [
    {link:"admin", title:"Home"},
    {link:"admin/produk", title:"Produk"}
  ]
}
