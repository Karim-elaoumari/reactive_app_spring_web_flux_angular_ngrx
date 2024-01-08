import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LoaderComponent } from './loader/loader.component';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PaginationComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FullCalendarModule
  ],
  exports: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PaginationComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
