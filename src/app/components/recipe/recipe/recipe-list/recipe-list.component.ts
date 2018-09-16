import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('My Recipe', 'Test description', 'https://cdn.pixabay.com/photo/2018/09/12/12/14/photographer-3672010_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
