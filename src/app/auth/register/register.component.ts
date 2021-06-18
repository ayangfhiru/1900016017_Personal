import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  confhide = true;
  user:any = {};
  constructor(
    public router: Router,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }
  
  info: boolean = true;
  message:any;
  register(){
    this.info = true;
    if (this.user.password == this.user.conpass) {
      this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(result=>{
        // alert("Register Berhasil");
        this.info = false;
        this.message = "Register berhasil"
        this.router.navigate(['login']);
      }).catch(error=>{
        if (this.user.password.length < 6) {
          // alert("Password minimal enam karakter");
          this.info = false;
          this.message = "Password minimal enam karakter"
        }else{
          // alert("Reister Gagal");
          this.info = false;
          this.message = "Register Gagal"
        }
      });
    }
    else{
      // alert("Konfirmasi Password Salah");
      this.info = false;
      this.message = "Konfirmasi Password Salah"
    }
  }

}
