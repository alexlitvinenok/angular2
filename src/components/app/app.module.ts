import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course/courseDetails/courseDetails.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { LogoComponent } from './header/logo/logo.component';
import { ToolboxComponent } from './toolbox/toolbox.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseDetailsComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LogoComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
