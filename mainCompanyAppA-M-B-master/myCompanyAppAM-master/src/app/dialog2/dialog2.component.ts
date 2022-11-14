import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog2 } from './dialog2';
import { Dialog2Service } from './dialog2.service';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css'],
})
export class Dialog2Component implements OnInit {
  constructor(
    private stockService: Dialog2Service,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit(): void {}

  stockObj: Dialog2 = new Dialog2();
  stockList: Array<Dialog2> = [];
  stockList2: Array<Dialog2> = [];
  data: {} | any;

  addStock(cid: number) {
    this.stockService.addStock(cid, this.stockObj).subscribe(
      (data) => {
        this.data = JSON.stringify(data);
        this.stockList.push(this.data);
        console.log(this.stockList);
        alert('Stock details added!');
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getStock(cid:number){
    this.stockService.getStock(cid).subscribe(
      data=>{
        this.data = data;
        this.stockList2.push(this.data);
        console.log(this.stockList2);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
