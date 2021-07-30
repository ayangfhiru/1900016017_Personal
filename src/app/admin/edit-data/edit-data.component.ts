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
  loading: boolean = true;
  loadingIcon: boolean = true;
  formImg: boolean = true;

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
      this.loading = false;
    }
    console.log("Nama File "+this.selectedFile.name);
  }

  bar: any = 5;
  progesBar: boolean = false;
  uploadImg(){
    this.uploadBerhasil = true;
    this.formImg = false;
    this.progesBar = true;

    const filePath = "PlantImg/"+this.selectedFile.name;
    const upload = this.storage.upload(filePath, this.selectedFile);
    const storageRef = this.storage.ref(filePath);

    var uploadTask = storageRef.put(this.selectedFile);

    upload.snapshotChanges().pipe(
      finalize(()=> {
        this.bar = (upload.task.snapshot.bytesTransferred / upload.task.snapshot.totalBytes) * 100;
        storageRef.getDownloadURL().subscribe(url => {
          this.dataPlants.urlImg = url;
          this.loading = true;
          this.uploadBerhasil = true;
          this.formImg = false;
        })
      })
    ).subscribe(url => {
      console.log(url);
    })

  }

  editPlants(){
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
