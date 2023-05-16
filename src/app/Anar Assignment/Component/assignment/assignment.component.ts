import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(private service:ServiceService) { }

  todosDetails: any[] = [];

  ngOnInit() {
    this.getTodosDetails();
  }

  getTodosDetails() {
    this.service.getTodosData().subscribe((res: any) => {
      this.todosDetails = res;
    })
  }

}
