import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes: Routes = [
  {
    path: 'portfolio/summary',
    component: PortfolioComponent
  },
  {
    path: '',
    redirectTo: '/portfolio/summary',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/portfolio/summary'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}