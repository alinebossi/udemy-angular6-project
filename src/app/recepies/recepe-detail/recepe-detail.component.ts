import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepe-detail',
  templateUrl: './recepe-detail.component.html',
  styleUrls: ['./recepe-detail.component.css']
})
export class RecepeDetailComponent implements OnInit {

  @Input() recipe: Recepie;

  constructor() { }

  ngOnInit() {
  }

}
