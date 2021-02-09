import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { IssueDetailsComponent } from '../app/components/issue-details/issue-details.component';
import { IssuesTableComponent } from '../app/components/issues-table/issues-table.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'issue',
    component: IssuesTableComponent
  },
  {
    path: 'details/:id',
    component: IssueDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
