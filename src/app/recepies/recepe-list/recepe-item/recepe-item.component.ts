import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';
@Component({
  selector: 'app-recepe-item',
  templateUrl: './recepe-item.component.html',
  styleUrls: ['./recepe-item.component.css']
})
export class RecepeItemComponent implements OnInit {

  @Input() recipe: Recepie;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
