import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustdirDirective } from '../custdir.directive';



@NgModule({
  declarations: [
    CustdirDirective
  ],
  imports: [
    CommonModule
  ] , //shared module use for duplicate declarations
  exports:[
    CustdirDirective
  ]
})
export class UtilityModule { }
