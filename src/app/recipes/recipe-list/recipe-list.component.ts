import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Doner Kebab", "Perfect Doner Kebab", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/01/16/doner-kebab.jpg?w968h681"),
    new Recipe("Filled  Meatballs", "Let's try amazing Filled Meatballs", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNjRR5cgRkKZl72-DGEwgMSfIqV4dARl-z6rW1i3a2l9EHW0uOA")
  ];

  constructor() { }

  ngOnInit() {
  }

}
