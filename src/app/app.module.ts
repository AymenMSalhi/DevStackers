import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainHeaderComponent } from './layouts/main-header/main-header.component';
import { SharedModule } from './shared/modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MainFooterComponent } from './layouts/main-footer/main-footer.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PublicHeaderComponent } from './layouts/public-header/public-header.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'
import { CodeInputModule } from 'angular-code-input';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainHeaderComponent,
    MainFooterComponent,
    PublicLayoutComponent,
    PublicHeaderComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CodeInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
