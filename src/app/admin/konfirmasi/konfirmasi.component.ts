import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-konfirmasi',
  templateUrl: './konfirmasi.component.html',
  styleUrls: ['./konfirmasi.component.scss']
})
export class KonfirmasiComponent implements OnInit {

  constructor(
    public firestore: AngularFirestore,
    public dialogRef: MatDialogRef<KonfirmasiComponent>,
    @Inject(MAT_DIALOG_DATA) public dataPlants:any,
  ) { }

  ngOnInit(): void {
  }
  public confirmMessage: string = "";
  confirm(){
    this.firestore.collection('plants').doc(this.dataPlants.id).delete().then(res=>{
      this.dialogRef.close();
    }).catch(err=>{
      alert("Gagal");
    })
  }
}
