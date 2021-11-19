import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  title:string;
  type: string;
  message: string;
  color: string;
  icon: string;
  icon_color: string;

  constructor(public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.title="";
      this.type="";
      this.message="";
      this.color="";
      this.icon="";
      this.icon_color="";      
    }

  ngOnInit(): void {
    this.type = this.data.type;
    if(this.type == 'error'){
     
      this.title = this.data.title;
      this.message = this.data.message;
      this.color = "warn";
    }
    if(this.data.type == 'success'){
      this.title = this.data.title;
      this.message = this.data.message;
      this.color = "accent";
      this.icon_color = "";
    }
    if(this.data.type == 'info'){
      this.title = this.data.title;
      this.message = this.data.message;
      this.color = "primary";
      this.icon_color = "";
    }

  }//ngOnInit
  onClose() {
    this.type = "";
    this.title = "";
    this.message = "";
    this.dialogRef.close();
  }
  

}//class
