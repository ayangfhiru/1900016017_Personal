import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.component.html',
  styleUrls: ['./tambah-data.component.scss']
})
export class TambahDataComponent implements OnInit {

  constructor(
    public api: ApiService,
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  dataUser:any = {};
  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.dataUser = user
    })
  }

  dataplants:any = {};
  loading: boolean = true;
  addData(){
    // console.log(Object.keys(this.dataplants).length)
    this.loading = false;
    this.dataplants.email = this.dataUser.email
    let tgl = new Date().getTime().toString();
    this.firestore.collection('plants').doc(tgl).set(this.dataplants).then(res => {
      this.loading = true;
      this.api.router.navigate(['admin/produk'])
    }).catch(err => {
      alert("Gagal menambahkan data");
    })
  }


}
