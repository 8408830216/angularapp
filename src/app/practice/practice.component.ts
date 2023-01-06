import { Component,OnInit } from '@angular/core';
import { Practice } from '../models/practice';
import { PracticeService } from '../services/practice.service';




@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

 practice:Practice[]=[]; 
constructor(private _practiceService:PracticeService){

}
ngOnInit(){
  this._practiceService.getDataOfTodos().subscribe(res=>{
    console.log('Todos Data',res);
    
this.practice=res
  })
}


}
