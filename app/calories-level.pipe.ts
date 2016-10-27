import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "caloriesLevel",
  pure: false // it is stateful: tells Angular to check if the output has changed after each change detection cycle, causing it to update as soon as we change something about a task
})

export class CaloriesLevelPipe implements PipeTransform { //PipeTransform is an interface definition inside of Angular Core
  transform(input: Meal[], desiredCaloriesLevel) {
    var output: Meal[] = [];
    if(desiredCaloriesLevel === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCaloriesLevel === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
