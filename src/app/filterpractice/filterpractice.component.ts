import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpractice',
  templateUrl: './filterpractice.component.html',
  styleUrls: ['./filterpractice.component.css']
})
export class FilterpracticeComponent implements OnInit {
  searchBike:string='';

  constructor() { }

bikesArray:any[]=[
  {bName:'Hayabusa',cName:'Suzuki',price:'1000000',nPlate:'MH 04 2000',avg:'15Km'},
  {bName:'NinjaZx',cName:'Kawasaki',price:'1200000',nPlate:'MH 04 2001',avg:'12Km'},
  {bName:'Gixxer',cName:'Suzuki',price:'300000',nPlate:'MH 04 1008',avg:'35Km'},
  {bName:'CBR',cName:'Honda',price:'900000',nPlate:'MH 04 2002',avg:'20Km'},
  {bName:'Dominar',cName:'Bajaj',price:'400000',nPlate:'MH 04 2003',avg:'30Km'},
  {bName:'Pulsur',cName:'Bajaj',price:'200000',nPlate:'MH 04 1998',avg:'45Km'},
  {bName:'Duke',cName:'KTM',price:'500000',nPlate:'MH 04 2004',avg:'25Km'},
]
  ngOnInit() {
  }

}
