import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of mealsList">
    <p><em>{{ currentMeal.name }}</em>: {{ currentMeal.details }} for total of <strong>{{ currentMeal.calories }}</strong> calories</p>
    <button (click)="editButtonClicked(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() mealsList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit); 
  }
}
