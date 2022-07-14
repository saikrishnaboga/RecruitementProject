import { NgModule,Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './header/registration/registration.component';
import { CareersComponent } from './header/careers/careers.component';
import { BlogsComponent } from './header/blogs/blogs.component';
import { SecurityComponent } from './header/security/security.component';
import { AboutComponent } from './header/about/about.component';
import { UserstableComponent } from './login/userstable/userstable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RecruiterComponent } from './login/recruiter/recruiter.component';
import { EditCandidateComponent } from './login/userstable/edit-candidate/edit-candidate.component';
import { myRoutings } from './app-routing.module';
import { Users } from './users';
import { UsersService } from './users.service';
import { OrderModule } from 'ngx-order-pipe';
import { MatIconModule } from '@angular/material/icon';
import { RecruiterHeaderComponent } from './login/recruiter/recruiter-header/recruiter-header.component';
import { ApiService } from './apis.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppComponent,
    // NavbarComponent,
    // TestComponent,
    myRoutings,
    AboutComponent,
    SecurityComponent,
    CareersComponent,
    // NotificationsComponent,
    // SupportComponent,
    BlogsComponent,
    UserstableComponent,
    HeaderComponent,
    RecruiterComponent,
    RegistrationComponent,
    EditCandidateComponent,
    RecruiterHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,

  ],
  // exports [],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
