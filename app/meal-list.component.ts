import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of mealsList">
    <p><em>{{ currentMeal.name }}</em>: {{ currentMeal.details }} for total of <strong>{{ currentMeal.calories }}</strong> calories</p>
  </div>
  `
})

export class MealListComponent {
  @Input() mealsList: Meal[];
}
