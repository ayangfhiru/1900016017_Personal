import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.component.html',
  styleUrls: ['./detail-produk.component.scss']
})
export class DetailProdukComponent implements OnInit {

  constructor(
    public api: ApiService,
    public firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.getDataPlants();
  }

  idPlants: any;
  dataPlants: any = {};
  getDataPlants(){
    this.idPlants = this.api.getIdPlants();
    
    this.firestore.collection("plants").doc(this.idPlants).get().subscribe(res=>{
      this.dataPlants = res;
    })
  }

}
