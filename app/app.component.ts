import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
  <h1>Meal Tracker</h1>
  <new-meal (newMealSender)="addMeal($event)"></new-meal>
  <meal-list [mealsList]="masterMealsList" (clickSender)="editSpecificMeal($event)"></meal-list>
  <edit-meal [mealToBeEdited]="selectedMeal" (doneClickedSender)="finishedEditing()"></edit-meal>
  `
})

export class AppComponent {
  public masterMealsList: Meal[] = [
    new Meal("Cheezeburger", 800, "Extra bacon"),
    new Meal("Pizza", 760, "4 slices"),
    new Meal("Chow Fun", 620, "Chicken was the meat")
  ];
  selectedMeal: Meal = null; // here, the null makes the default item unselected, as it should be since it will be set by each edit button belonging to each task.

  addMeal(newMealToBeAdded: Meal) {
    this.masterMealsList.push(newMealToBeAdded);
  }

  editSpecificMeal(mealToBeEdited: Meal) {
    this.selectedMeal=mealToBeEdited;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}
