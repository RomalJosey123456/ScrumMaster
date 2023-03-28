import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrumCreationComponent } from './scrum-creation/scrum-creation.component';
import { ScrumDetailsComponent } from './scrum-details/scrum-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrumCreationComponent,
    ScrumDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
