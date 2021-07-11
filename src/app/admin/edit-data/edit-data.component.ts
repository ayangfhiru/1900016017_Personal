import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditDataComponent>,
    @Inject(MAT_DIALOG_DATA) public dataPlants:any,
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  userData: any = {};
  ngOnInit(): void {
    this.auth.authState.subscribe((res:any)=>{
      this.firestore.collection("userData").doc(res.email).valueChanges().subscribe(result=>{
        this.userData = result;
      })
    })
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
