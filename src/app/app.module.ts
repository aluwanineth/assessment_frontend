import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkRunnerComponent } from './park-runner/park-runner.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './services/menu.service';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@NgModule({
   declarations: [
      AppComponent,
      ParkRunnerComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      MenuModule,

   ],
   providers: [MenuService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
