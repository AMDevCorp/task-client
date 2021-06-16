import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {DigitOnlyDirective} from "../directives/digit-only.directive";
import {MatProgressSpinnerModule, MatSpinner} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    NavbarComponent,
    DigitOnlyDirective
  ],
  exports: [
    NavbarComponent,
    DigitOnlyDirective,
    MatSpinner
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
