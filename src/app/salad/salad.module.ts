import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';

import { SaladState } from './salad.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    CommonModule,
    SaladRoutingModule,
    NgxsModule.forFeature([SaladState])
  ],
  declarations: []
})
export class SaladModule { }
