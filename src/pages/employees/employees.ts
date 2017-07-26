import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmployeesProvider } from '../../providers/employees/employees';

/**
 * Generated class for the EmployeesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage implements OnInit{
  employees;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private employeesProvider: EmployeesProvider) {
  }

  ngOnInit() {
    this.employeesProvider.getEmployees().subscribe(employees => this.employees = employees);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesPage');
  }

}
