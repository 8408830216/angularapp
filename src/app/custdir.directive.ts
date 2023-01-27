import { Directive, ElementRef, Renderer2 ,OnInit} from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective implements OnInit{

  constructor(private el:ElementRef,private render:Renderer2) //dependency injection concept
    {   
    console.log("Custom Directive Applied");
    // el.nativeElement.style.backgroundColor='gray';
    //  el.nativeElement.style.display='none';
    render.setStyle(el.nativeElement,'backgroundColor','yellow')
  }
  ngOnInit(){
    // (this.el.nativeElement as HTMLElement).style.backgroundColor='red';
  }
  
}

