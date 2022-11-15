import {MatDialog} from '@angular/material/dialog';
import {ViewChild, Component, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog2 } from '../dialog2/dialog2';
import { Dialog2Component } from '../dialog2/dialog2.component';


@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  title = 'myCompanyAppAM';

  displayedColumns: string[] = ['companyID', 'companyName', 'companyCEO', 'turnover', 'website', 'stockPrice', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog, 
    private companyService: ApiService, 
    
    ){
      const max = Math.max.apply(Math, this.stockList2.map(o=>o.stockPrice));
      const min = Math.min.apply(Math, this.stockList2.map(o=>o.stockPrice));
  }

  ngOnInit(): void {
    this.getAllCompany();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val =>{
      if(val === 'save'){
        this.getAllCompany();
      }
    })
  }

  getAllCompany(){
    this.companyService.getAllCompany().subscribe({
      next:(res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the Records")
      }
    })
  }

  editCompany(row: any){
    this.dialog.open(DialogComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val =>{
      if(val==='update'){
        this.getAllCompany();
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCompany(id: number){
    this.companyService.deleteCompany(id).subscribe({
      next:(res) =>{
        alert("Company deleted successfully!");
        this.getAllCompany();
      },
      error:()=>{
        alert("Error while deleting record")
      }
    })
  }

  
  openDialog2(id: number) {
    this.dialog.open(Dialog2Component, {
      width: '30%'
    }).afterClosed().subscribe(val =>{
      if(val === 'save'){
        this.getAllCompany();
      }
    })
  }


  stockObj: Dialog2 = new Dialog2();
  stockList2: Array<Dialog2> = [];
  stockList3: Array<Dialog2> = [];
  data: {} | any;


  getStock(cid:number){
    this.companyService.getStock(cid).subscribe(
      data=>{
        this.stockList2 = Object.values(data);
        console.log(this.stockList2);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  
}
