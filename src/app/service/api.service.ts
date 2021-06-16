import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  message:any;
  constructor() { }

  sendJenis(jns:any){
    this.message = jns;
  }
  getJenis(){
    return this.message;
  }

}
