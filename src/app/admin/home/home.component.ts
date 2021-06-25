import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public firestore: AngularFirestore
  ) { }

  // home: any;
  jmlProduk: number = 0;
  ngOnInit(): void {
    this.firestore.collection("plants").get().subscribe(res=>{
      this.jmlProduk = res.docs.length
      // console.log(this.jmlProduk)
      this.home();
    });
  }

  homee:any;
  home(){
    this.homee = [
      {header:'Produk', title:'Jumlah produk yang dijual', cardText:this.jmlProduk},
      {header:'Penjualan', title:'Total penjualan', cardText:'Ow'}
    ]
  }
  
}
