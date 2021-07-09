import { ScheduleComponent } from './components/schedule/schedule.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { SheduleConfigDetailsComponent } from './components/shedule-config-details/shedule-config-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'configurations', component: ConfigurationsComponent },
  { path: 'configurations/:id', component: SheduleConfigDetailsComponent },
  { path: 'schedule/:id', component: ScheduleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
