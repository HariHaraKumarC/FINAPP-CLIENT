import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatGridListModule,
  MatTooltipModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SavingsComponent } from './savings/savings.component';
import { FixedDepositsComponent } from './fixed-deposits/fixed-deposits.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    PortfolioComponent,
    BreadcrumbComponent,
    SavingsComponent,
    FixedDepositsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatTooltipModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
