import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    StudentComponent,
    AddStudentComponent,
    TeacherComponent,
    AddTeacherComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
