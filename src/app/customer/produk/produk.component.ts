import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.scss']
})
export class ProdukComponent implements OnInit {
  
  jenis = "Parent to Child";

  constructor(
    public router: Router,
    public api:ApiService,
    public firestore: AngularFirestore,
    public dialog: MatDialog
  ) { }

  
  ngOnInit(): void {
    this.getPlants();
  }

  jenisTnmCard = [
    {'title':'Tanaman hias akar', 'jenis':'akar', 'img':'https://firebasestorage.googleapis.com/v0/b/plantshop-2dc5b.appspot.com/o/JenisImg%2Fhias%20akar.jpg?alt=media&token=a4869d87-ae60-4390-8447-cd39cc52dd1e'},

    {'title':'Tanaman hias buah', 'jenis':'buah', 'img':'https://firebasestorage.googleapis.com/v0/b/plantshop-2dc5b.appspot.com/o/JenisImg%2Fhias%20buah.jpg?alt=media&token=9afb499a-25e6-4c89-8b22-298465b6acc7'},

    {'title':'Tanaman hias bunga', 'jenis':'bunga', 'img':'https://firebasestorage.googleapis.com/v0/b/plantshop-2dc5b.appspot.com/o/JenisImg%2Fhias%20bunga.jpeg?alt=media&token=f0fb60ae-36cc-4eef-b2ca-de6990e759e8'},

    {'title':'Tanaman hias daun', 'jenis':'daun', 'img':'https://firebasestorage.googleapis.com/v0/b/plantshop-2dc5b.appspot.com/o/JenisImg%2Fhias%20daun.jpeg?alt=media&token=f6fc11a5-24a8-48e0-88e6-f0386457b4b4'},

    {'title':'Tanaman hias kaktus', 'jenis':'kaktus', 'img':'https://firebasestorage.googleapis.com/v0/b/plantshop-2dc5b.appspot.com/o/JenisImg%2Fhias%20kaktus.jpg?alt=media&token=c18b3348-36c0-41c8-a6c3-347bba21b9b9'}
  ]
  
  plants: any = [];
  getPlants(){
    this.api.getDataPlants().subscribe(res=>{
      this.plants = res
    })
  }

  cekdata(data:any){
    this.api.sendPlants(data);
    this.router.navigate(['customer/produk']);
  }

  kirimJenis(data:any){
   this.api.sendJenis(data)
   this.jenis = data;
   this.router.navigate(['customer/jenis']);    
  }

  keranjang(){
    alert("Belum Bisa");
  }
}
