import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {

  selectedFile:any = "";
  
  constructor(
    public dialogRef: MatDialogRef<EditDataComponent>,
    @Inject(MAT_DIALOG_DATA) public dataPlants:any,
    public firestore: AngularFirestore,
    public auth: AngularFireAuth,
    public storage: AngularFireStorage
  ) { }

  userData: any = {};
  ngOnInit(): void {
    this.auth.authState.subscribe((res:any)=>{
      this.firestore.collection("userData").doc(res.email).valueChanges().subscribe(result=>{
        this.userData = result;
      })
    })
  }

  uploadBerhasil: boolean = true;
  onFileChange(event:any){
    if(event.target.files.length >= 1){
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      this.uploadBerhasil = false;
    }
    console.log("Nama File "+this.selectedFile.name);
  }

  formImg: boolean = true;
  urlImages: any;
  uploadImg(){
    const filePath = "PlantImg/"+this.selectedFile.name;
    const upload = this.storage.upload(filePath, this.selectedFile);
    const storageRef = this.storage.ref(filePath);

    upload.snapshotChanges().pipe(
      finalize(()=> {
        storageRef.getDownloadURL().subscribe(url => {
          this.urlImages = url;
        })
      })
    ).subscribe(url => {
      console.log(url);
    })

    if(upload){
      this.uploadBerhasil = true;
      this.formImg = false;
    }
  }

  loading: boolean = true;
  editPlants(){
    // console.log("Edit data " + this.dataPlants)
    this.loading = false;
    this.firestore.collection('plants').doc(this.dataPlants.id).update(this.dataPlants).then(res=>{
      this.loading = false
      this.dialogRef.close(res);
    }).catch(err=>{
      alert("Gagal Edit data Id "+this.dataPlants.id);
      this.dialogRef.close(err);
    })
  }

  close(){
    this.dialogRef.close();
  }

}
