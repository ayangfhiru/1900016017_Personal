import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-jenis-tanaman',
  templateUrl: './jenis-tanaman.component.html',
  styleUrls: ['./jenis-tanaman.component.scss']
})
export class JenisTanamanComponent implements OnInit {
  getJenis:any;
  plant : any  = {};
  @Input() jenis: any;

  constructor(
    public api:ApiService,
    public firestore: AngularFirestore
  ) { }
  
  ngOnInit(): void {
    this.getJenis = this.api.getJenis();
    // this.firestore.collection('plant').
    // console.log(this.plant)
  }
}
