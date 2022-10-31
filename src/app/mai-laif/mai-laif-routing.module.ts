import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaiLaifPage } from './mai-laif.page';

const routes: Routes = [
  {
    path: '',
    component: MaiLaifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaiLaifPageRoutingModule {}
