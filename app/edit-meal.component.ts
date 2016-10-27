import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="mealToBeEdited"> <!--from root component by way of edit-task component's edit button(showDetails())-->
      <h1>Edit Meal</h1>
      <div>
        <label>Enter New Name:</label>
        <input [(ngModel)]="mealToBeEdited.name">
      </div>
      <div>
      <div>
        <label>Enter New Details:</label>
        <input [(ngModel)]="mealToBeEdited.details">
      </div>
      <div>
        <label>Enter New Calories:</label>
        <input  type="number" [(ngModel)]="mealToBeEdited.calories">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() mealToBeEdited: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
