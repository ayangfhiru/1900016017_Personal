import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.component.html',
  styleUrls: ['./detail-produk.component.scss']
})
export class DetailProdukComponent implements OnInit {
  IdPlants: any;
  dataPlant:any = {};
  Id:any;

  constructor(
    public api: ApiService,
    public firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.getDataPlants();
    this.Id = localStorage.getItem('idPlants');
    this.firestore.collection("plants").doc(this.Id).valueChanges().subscribe(result=>{
      this.dataPlant = result
    },error=>{
      console.log("Data Error");
    })
  }

  getDataPlants(){
    this.IdPlants = this.api.getPlants();
    if(this.IdPlants == null){}
    else{
      localStorage.setItem('idPlants', this.IdPlants);
    }    
  }

}
