import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { InputSheduleConfigComponent } from './components/input-shedule-config/input-shedule-config.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { HomeComponent } from './components/home/home.component';
import { SheduleConfigDetailsComponent } from './components/shedule-config-details/shedule-config-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListConfigurationsComponent } from './components/list-configurations/list-configurations.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { PeriodComponent } from './components/period/period.component';
import { DayComponent } from './components/day/day.component';
import { WeekComponent } from './components/week/week.component';
import { ScheduleComponent } from './components/schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputSheduleConfigComponent,
    HomeComponent,
    SheduleConfigDetailsComponent,
    NavbarComponent,
    ListConfigurationsComponent,
    ConfigurationsComponent,
    PeriodComponent,
    DayComponent,
    WeekComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatPseudoCheckboxModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
