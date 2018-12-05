import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepe-list',
  templateUrl: './recepe-list.component.html',
  styleUrls: ['./recepe-list.component.css']
})
export class RecepeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recepie>();

  recipes: Recepie[]  = [
    // tslint:disable-next-line:max-line-length
    new Recepie('teste', 'test', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg'),
    new Recepie('teste 2', 'test 2', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recepie) {
    this.recipeWasSelected.emit(recipe);
  }

}
