import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  foods:String[] = [];
  constructor(private foodservice:FoodService){ }

  ngOnInit(): void {
    this.foods = this.foodservice.getAll();  
  }

}
