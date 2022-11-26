import { Component, OnInit } from '@angular/core';
import { Company } from '../assigndirective/company';

@Component({
  selector: 'app-directiveassign',
  templateUrl: './directiveassign.component.html',
  styleUrls: ['./directiveassign.component.css']
})
export class DirectiveassignComponent implements OnInit {
  isShow:boolean=true;
  title:string="Top Four IT Companies in India ";
  
    companies:Company[]=[
      { companyName: 'Tata Consultancy Service', headOfficeLocation: 'Mumbai', implementation:1968 , totalEmployees:520000},
      { companyName: 'Infosys', headOfficeLocation: 'Bengaluru', implementation:1981 , totalEmployees:428000 },
      { companyName: 'HCL Technologies', headOfficeLocation: 'Noida', implementation:1991 , totalEmployees:420000 },
      { companyName: 'Wipro Limited', headOfficeLocation: 'Bengaluru', implementation:1945 , totalEmployees:430000 }]
  constructor() { }

  ngOnInit() {
  }
  
}
