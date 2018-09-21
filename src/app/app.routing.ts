import {Routes} from '@angular/router';
import {CompanyCreateComponent} from './company/company-create/company-create.component';
import {CompanyListComponent} from './company/company-list/company-list.component';


export const APP_ROUTES: Routes = [
  {path: 'company/create', component: CompanyCreateComponent},
  {path: 'company', component: CompanyListComponent}
];
