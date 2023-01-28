import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { PageGameComponent } from './page-game/page-game.component';

const routes: Routes = [
  {
    path: 'game',
    component: PageGameComponent
  },
  {
    path: '',
    component: PageWelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
