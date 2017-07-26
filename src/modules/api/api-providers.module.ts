import { NgModule, ModuleWithProviders } from '@angular/core';

import { BaseApiProviders } from './providers/base.api.providers';
import { EmployeesApiProviders } from './providers/employees.api.providers';
import { AccountApiProviders } from './providers/account.api.providers';
import { BranchesApiProviders } from './providers/branches.api.providers';
import { ClientsApiProviders } from './providers/clients.api.providers';
import { OnlineBookingApiProviders } from './providers/online-booking.api.providers';
import { ScheduleApiProviders } from './providers/schedule.api.providers';
import { ServicesApiProviders } from './providers/services.api.providers';
import { StatisticsApiProviders } from './providers/statistics.api.providers';

@NgModule()
export class ApiProvidersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiProvidersModule,
      providers: [
        BaseApiProviders,
        AccountApiProviders,
        BranchesApiProviders,
        ClientsApiProviders,
        EmployeesApiProviders,
        OnlineBookingApiProviders,
        ScheduleApiProviders,
        ServicesApiProviders,
        StatisticsApiProviders
      ]
    };
  }
}
