import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  confhide = true;
  user: any = {};

  constructor(
    public router: Router,
    public auth: AngularFireAuth,
    public firestore: AngularFirestore,
    public api: ApiService
  ) {}

  url: any = window.location.pathname.split('/').pop();
  ngOnInit(): void {
    console.log(this.url);
  }
  
  loading: boolean = false;
  info: boolean = true;
  message:any;
  register(){
    this.info = true;
    this.loading = true;
    if (this.user.password == this.user.conpass) {
      if (this.user.password.length < 6) {
          this.info = false;
          this.message = "Password minimal enam karakter";
        }
        else{
          this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((result:any)=>{
            delete this.user.password;
            delete this.user.conpass;
            this.user.kondisi = "0";

            if(this.url == "register-admin"){
              this.user.kondisi = "1";
              this.firestore.collection('userData').doc(this.user.email).set(this.user).then(res=>{
                  this.message = "Berhasil Oke";
                  this.router.navigate(['/']);
              }).catch(err=>{
                this.loading = false;
                this.message = "Registrasi Gagal";
              });
            }
            else if(this.url = '/register'){
              this.firestore.collection('userData').doc(this.user.email).set(this.user).then(res=>{
                  this.message = "Berhasil Oke";
                  this.router.navigate(['/']);
              }).catch(err=>{
                this.loading = false;
                this.message = "Registrasi Gagal";
              });
            }
            else{
              console.log("Error");
            }   

          }).catch(error=>{
            this.info = false;
            this.loading = false;
            this.message = error.message;
          });
        }
    }
    else{
      this.loading = false;
      this.info = false;
      this.message = "Konfirmasi Password Salah";
    }
  }

}
