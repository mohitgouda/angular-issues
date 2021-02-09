import { Component, OnInit } from '@angular/core';
import { IssueService } from '../app/services/issue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';

  constructor(private issueService: IssueService) {
  }
  ngOnInit() {
    this.issueService.getAngularIssuesDescription().subscribe((response) => {
      this.title = response['full_name'];
    });
  }
}
