import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("doner", 1),
    new Ingredient("bread", 1),
    new Ingredient("potatos", 5)
  ];

  constructor() { }

  ngOnInit() {
  }

}
