import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)" class="filter"> <!-- event listener on change-->
    <option value="all" selected="selected">Show All</option>
    <option value="high">Show High Cal. Meals with More than 500 Calories</option>
    <option value="low">Show Low Cal. Meals with Less than 500 Calories</option>
  </select>
  <div *ngFor="let currentMeal of mealsList | caloriesLevel:selectedCaloriesLevel">
    <p><em>{{ currentMeal.name }}</em>: {{ currentMeal.details }} for total of <strong>{{ currentMeal.calories }}</strong> calories</p>
    <button (click)="editButtonClicked(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() mealsList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCaloriesLevel: string = "all";//so that all meals are listed when page refreshes!
  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  onChange(optionFromMenu) {
  this.selectedCaloriesLevel = optionFromMenu;
  }
}
