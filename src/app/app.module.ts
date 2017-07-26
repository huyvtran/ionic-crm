import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AccountPage } from '../pages/account/account';
import { BranchesPage } from '../pages/branches/branches';
import { ClientsPage } from '../pages/clients/clients';
import { EmployeesPage } from '../pages/employees/employees';
import { OnlineBookingPage } from '../pages/online-booking/online-booking';
import { RecoverPage } from '../pages/recover/recover';
import { RecoverSuccessPage } from '../pages/recover-success/recover-success';
import { SchedulePage } from '../pages/schedule/schedule';
import { ServicesPage } from '../pages/services/services';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { StatisticsPage } from '../pages/statistics/statistics';
import { EmployeesProvider } from '../providers/employees/employees';
import { ApiProvidersModule } from '../modules/api/api-providers.module';
import { Deeplinks } from '@ionic-native/deeplinks';

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    BranchesPage,
    ClientsPage,
    EmployeesPage,
    OnlineBookingPage,
    RecoverPage,
    RecoverSuccessPage,
    SchedulePage,
    ServicesPage,
    SigninPage,
    SignupPage,
    StatisticsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ApiProvidersModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    BranchesPage,
    ClientsPage,
    EmployeesPage,
    OnlineBookingPage,
    RecoverPage,
    RecoverSuccessPage,
    SchedulePage,
    ServicesPage,
    SigninPage,
    SignupPage,
    StatisticsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmployeesProvider,
    Deeplinks,
  ]
})
export class AppModule {}
