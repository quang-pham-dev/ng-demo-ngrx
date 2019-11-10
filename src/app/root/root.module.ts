import { NgModule } from '@angular/core';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './components/root/root.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ]
})
export class RootModule { }
