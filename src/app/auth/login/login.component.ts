import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(result=>{
      alert("Oke Berhasil");
    }).catch(error=>{
      alert("Error");
    });
  }
}
