import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
	this.data.getEmployees().subscribe(
		data => this.employees$ = data
	);
  }

}
