import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { PagePregameComponent } from './page-pregame/page-pregame.component';
import { PageGameComponent } from './page-game/page-game.component';

const routes: Routes = [
  {
    path: 'game',
    component: PageGameComponent
  },
  {
    path: 'pregame',
    component: PagePregameComponent
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
