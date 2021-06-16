import { Component, OnInit, Input, Inject } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-jenis-tanaman',
  templateUrl: './jenis-tanaman.component.html',
  styleUrls: ['./jenis-tanaman.component.scss']
})
export class JenisTanamanComponent implements OnInit {
  getJenis:any;
  @Input() jenis: any;

  constructor(
    public api:ApiService
  ) { }
  
  ngOnInit(): void {
    this.getJenis = this.api.getJenis();
  }
   
}
