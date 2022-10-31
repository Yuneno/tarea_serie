import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeContratasPageRoutingModule } from './me-contratas-routing.module';

import { MeContratasPage } from './me-contratas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeContratasPageRoutingModule
  ],
  declarations: [MeContratasPage]
})
export class MeContratasPageModule {}
