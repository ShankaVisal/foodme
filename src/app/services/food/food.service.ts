import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():String[]{
    return[
      'assets/images/foods/1.jpg',
      'assets/images/foods/2.jpg',
      'assets/images/foods/3.jpg',
      'assets/images/foods/4.jpg',
      'assets/images/foods/5.jpg',
      'assets/images/foods/6.jpg'
    ]
  }
}
