import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskComponent } from './task/task.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    HomeComponent,
    NotFoundComponent,
    TaskComponent,
    TaskContainerComponent,
    TasksContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
