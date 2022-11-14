import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private companyService: ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  companyForm !: FormGroup;
  actionBtn : string = "save"

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      companyID: ['', Validators.required],
      companyName: ['', Validators.required],
      companyCEO: ['', Validators.required],
      turnover: ['', Validators.required],
      website: ['', Validators.required]
    });
    console.log(this.editData);

    if(this.editData){

      this.actionBtn = "update";
      this.companyForm.controls['companyID'].setValue(this.editData.companyID);
      this.companyForm.controls['companyName'].setValue(this.editData.companyName);
      this.companyForm.controls['companyCEO'].setValue(this.editData.companyCEO);
      this.companyForm.controls['turnover'].setValue(this.editData.turnover);
      this.companyForm.controls['website'].setValue(this.editData.website);
    }
  }


  productForm !: FormGroup;

  addCompany(){
    if(!this.editData){
      if(this.companyForm.valid){
        this.companyService.addCompany(this.companyForm.value).subscribe({
          next: (res)=> {
            alert("company added successfully!")
            this.companyForm.reset();
            this.dialogRef.close("save");
          }, error:() => {
            alert("Error while adding the company!")
          }
        })
      }
      }else {
        this.updateProduct()
    }
  }

  updateProduct(){
    this.companyService.putCompany(this.companyForm.value, this.editData.companyID)
    .subscribe({
      next:(res)=>{
        alert("Company updated Successfully!");
        this.companyForm.reset();
        this.dialogRef.close("update");
      },
      error:()=>{
        alert("error while updating the record");
      }
    })
  }

}
