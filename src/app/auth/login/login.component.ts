import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  user:any = {};
  constructor(
    public api: ApiService,
    public auth: AngularFireAuth,
    public router: Router,
    public firestore: AngularFirestore
  ) { }
  
  //Firestore
  ngOnInit(): void {
    this.auth.onAuthStateChanged((user)=>{
      if(user){
        var uid = user.uid;
        // localStorage.setItem("TokenPlant", uid);
      }
      else{
        
      }
    })
  }

  loading: boolean = false;
  info:boolean = true;
  message:any;
  userdata:any = {};
  login(){
    this.loading = true;
    this.info = true;
    this.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(result=>{
      console.log(this.auth.currentUser)
      this.loading = true;

      if (result) {
        this.firestore.collection('userData', ref=> {
          return ref.where('email','==', this.user.email)
        }).valueChanges().subscribe(result => {
          this.userdata = result
          // console.log(this.userdata[0].kondisi)
          if (this.userdata[0].kondisi == "1" ) {
            this.loading = true;
            this.router.navigate(['/admin']);
          }
          else{
            this.loading = true;
            this.router.navigate(['/customer']);
          }
        })
      }
      else{
        // console.log("errr")
      }
    }).catch(error=>{
      this.info = false;
      this.loading = false;
      this.message = "Email atau Password salah";
    });
  }

}
