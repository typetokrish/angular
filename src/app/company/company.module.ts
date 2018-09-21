import {NgModule} from '@angular/core';
import {CompanyCreateComponent} from './company-create/company-create.component';
import {CompanyListComponent} from './company-list/company-list.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    CompanyCreateComponent,
    CompanyListComponent
  ],
  imports: [
    RouterModule
  ]
})

export class CompanyModule {


}
