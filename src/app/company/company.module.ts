import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CompanyRoutingModule} from './company-routing.module';
import {FilterPipe} from '../core/pipes/filter.pipe';

@NgModule({
  imports: [
    CompanyRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    CompanyRoutingModule.components,
    FilterPipe
  ]
})

export class CompanyModule {
}
