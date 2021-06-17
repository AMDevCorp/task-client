import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {DigitOnlyDirective} from "../directives/digit-only.directive";
import {MatProgressSpinnerModule, MatSpinner} from "@angular/material/progress-spinner";
import { FilterComponent } from './filter/filter.component';
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [
    NavbarComponent,
    DigitOnlyDirective,
    FilterComponent
  ],
  exports: [
    NavbarComponent,
    DigitOnlyDirective,
    MatSpinner,
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
