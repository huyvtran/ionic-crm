import { RouteInfo } from './sidebar-routes.interface';
import { AccountPage } from '../../pages/account/account';
import { SchedulePage } from '../../pages/schedule/schedule';
import { ServicesPage } from '../../pages/services/services';
import { EmployeesPage } from '../../pages/employees/employees';
import { ClientsPage } from '../../pages/clients/clients';
import { StatisticsPage } from '../../pages/statistics/statistics';
import { OnlineBookingPage } from '../../pages/online-booking/online-booking';
import { BranchesPage } from '../../pages/branches/branches';

export const ROUTES: RouteInfo[] = [
  { page: SchedulePage, title: 'Calendar', icon: 'calendar' },
  { page: BranchesPage, title: 'Branches', icon: 'git-branch' },
  { page: ServicesPage, title: 'Services', icon: 'list-box' },
  { page: EmployeesPage, title: 'Employees', icon: 'contacts' },
  { page: ClientsPage, title: 'Clients', icon: 'people' },
  { page: StatisticsPage, title: 'Statistics', icon: 'stats' },
  { page: OnlineBookingPage, title: 'Online booking', icon: 'clipboard' },
  { page: AccountPage, title: 'Account', icon: 'settings' },
];
