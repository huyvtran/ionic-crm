import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as employeesData from './employees-data'
import { Observable } from 'rxjs';

@Injectable()
export class EmployeesProvider {

  constructor() {}

  getEmployees() {
    console.log('employees', employeesData);
    return Observable.of(employeesData.data.employees);
  }
}
