import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Task</h1>
    <div>
      <label>New Meal Name:</label>
      <input #newMealName>
    </div>
    <div>
      <label>Enter New Meal Calories:</label>
      <input #newMealCalories>
    </div>
    <div>
      <label>New Meal Description:</label>
      <input #newMealDescription>
      <button (click)="createNewMeal(newMealName.value, newMealCalories.value, newMealDescription.value); newMealName.value='';
        newMealCalories.value=''; newMealDescription.value=''">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter(); //newTaskEmiiter is being created here.
  createNewMeal(name: string, calories: number, details: string) {
    var newMeal: Meal = new Meal(name, calories, details);
    this.newMealSender.emit(newMeal); //newTaskSender is sent over to parent in (), and the value passes (i.e. newMeal) shows up in parent as $event.
  }
}
