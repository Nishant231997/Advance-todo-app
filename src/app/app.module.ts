import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvanceTodoMainComponent } from './advance-todo-main/advance-todo-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table'  ;
@NgModule({
  declarations: [
    AppComponent,
    AdvanceTodoMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
