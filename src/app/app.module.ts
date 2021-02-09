import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuesTableComponent } from '../app/components/issues-table/issues-table.component';
import { IssueDetailsComponent } from '../app/components/issue-details/issue-details.component';
import { HomeComponent } from '../app/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuesTableComponent,
    IssueDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
