import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';
import {FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.component.html',
  styleUrls: ['./tambah-data.component.scss']
})
export class TambahDataComponent implements OnInit {

  formAddData: any;
  selectedFile:any = "";
  loading: boolean = true;
  loadingTxt: boolean = true;

  constructor(
    public api: ApiService,
    public firestore: AngularFirestore,
    public auth: AngularFireAuth,
    public storage: AngularFireStorage
  ) {}

  dataUser:any = {};
  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.dataUser = user
    });
    this.formAddData = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      height: new FormControl(null, Validators.maxLength(2)),
      jenis: new FormControl(null, Validators.required),
      total: new FormControl(null, Validators.required)
    });
    console.log(this.selectedFile.name+"OnInit")
  }

  uploadBerhasil: boolean = true;
  tambahFile: boolean = true;
  onFileChange(event:any){
    if(event.target.files.length >= 1){
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      this.tambahFile = false;
      this.loading = false;
    }
    console.log("Nama File "+this.selectedFile.name);
  }

  formImg: boolean = true;
  urlImages: any = "https://firebasestorage.googleapis.com/v0/b/plantshop-2dc5b.appspot.com/o/PlantImg%2Fdefault.png?alt=media&token=f91906ce-ba8c-4450-9f0c-764494266c9d";
  uploadImg(){
    this.uploadBerhasil = false;
    const filePath = "PlantImg/"+this.selectedFile.name;
    const upload = this.storage.upload(filePath, this.selectedFile);
    const storageRef = this.storage.ref(filePath);

    upload.snapshotChanges().pipe(
      finalize(()=> {
        storageRef.getDownloadURL().subscribe(url => {
          this.urlImages = url;
          this.uploadBerhasil = true;
          this.formImg = false;
          this.loading = true;
          this.loadingTxt = true;
        })
      })
    ).subscribe(url => {
      console.log(url);
    })
  }

  dataplants:any = {};
  tgl = new Date().getTime().toString();
  addData(){
    this.loading = false;
    this.loadingTxt = false;
    
    this.dataplants = this.formAddData.value;
    this.dataplants.id = this.tgl;
    this.dataplants.email = this.dataUser.email;
    this.dataplants.urlImg = this.urlImages;

    this.firestore.collection('plants').doc(this.tgl).set(this.dataplants).then(res => {
      this.loading = true;
      this.api.router.navigate(['admin/produk']);     
    }).catch(err => {
      alert("Gagal menambahkan data");
    })
  }

  loadingCncl: boolean = true;
  cancel(){
    this.loadingCncl = false;
    this.api.router.navigate(['admin/produk']);
  }
}
