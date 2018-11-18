import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RepoFinderComponent } from './repo-finder/repo-finder.component';
import { CommitFinderComponent } from './commit-finder/commit-finder.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    RepoFinderComponent,
    CommitFinderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }