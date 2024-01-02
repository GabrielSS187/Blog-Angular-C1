import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';

import { AppRoutingModule } from './app-routing.module';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
