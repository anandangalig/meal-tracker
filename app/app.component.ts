import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
  <h1>Meal Tracker</h1>
  `
})

export class AppComponent {
  public masterMealsList: Meal[] = [
    new Meal("Cheezeburger", 800, "Extra bacon"),
    new Meal("Pizza", 760, "4 slices"),
    new Meal("Chow Fun", 620, "Chicken was the meat")
  ];
}
