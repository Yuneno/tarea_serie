import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaiLaifPageRoutingModule } from './mai-laif-routing.module';

import { MaiLaifPage } from './mai-laif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaiLaifPageRoutingModule
  ],
  declarations: [MaiLaifPage]
})
export class MaiLaifPageModule {}
