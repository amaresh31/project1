import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemainingPipe } from './remaining.pipe';
import { GenderPipe } from './gender.pipe';
import { ChildComponent } from './child/child.component';
import{MathService} from './math.service';

@NgModule({
  declarations: [
    AppComponent,
    RemainingPipe,
    GenderPipe,
    ChildComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [MathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
