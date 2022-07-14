import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router,
  RouterLinkActive, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './header/registration/registration.component';
import { CareersComponent } from './header/careers/careers.component';
import { BlogsComponent } from './header/blogs/blogs.component';
import { SecurityComponent } from './header/security/security.component';
import { AboutComponent } from './header/about/about.component';
import { UserstableComponent } from './login/userstable/userstable.component';

import { RecruiterComponent } from './login/recruiter/recruiter.component';
import { EditCandidateComponent } from './login/userstable/edit-candidate/edit-candidate.component';

const appRoutes: Routes = [
  {path : "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  { path: 'register', component: RegistrationComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user-table', component: UserstableComponent },
  { path: 'recruiter', component: RecruiterComponent },
  { path: 'user-table', component: UserstableComponent },
  { path: 'edit-details', component: EditCandidateComponent },
  { path: 'edit-details/:candidateId', component: EditCandidateComponent },
  {
    path: '**', redirectTo: 'home' ,pathMatch: 'full'
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes),
  //   ],
  // exports: [RouterModule]

  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
  export const myRoutings = [
    // AdduserComponent,
    LoginComponent,
    // BlogsComponent,
    HomeComponent,
    // AboutComponent,
    // SecurityComponent,
    CareersComponent,
    // NotificationsComponent,
    // SupportComponent,

    RecruiterComponent,
    RegistrationComponent,
    UserstableComponent,
  ];



