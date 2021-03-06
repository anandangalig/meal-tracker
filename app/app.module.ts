import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesLevelPipe } from './calories-level.pipe';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, NewMealComponent, MealListComponent, EditMealComponent, CaloriesLevelPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
