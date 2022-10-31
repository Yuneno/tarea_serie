import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeContratasPage } from './me-contratas.page';

const routes: Routes = [
  {
    path: '',
    component: MeContratasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeContratasPageRoutingModule {}
