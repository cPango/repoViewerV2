import { Component } from '@angular/core';
import { GithubApiService } from '../app/services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private githubApi: GithubApiService) { }

  selectedRepo: string;
  gitCommits: {};
  menuOpen: string = "repoFinder";

  //Receives the data in the object sent from repo-finder as 'e'
  //Then binds it to new variables to share with commit-finder child component
  receiveSelectedRepo(e){
    this.menuOpen = e.view;
    this.githubApi.getCommits(e.user, e.repo).subscribe(commits => this.gitCommits = commits.json());
    this.selectedRepo = e.repo;
  }
}