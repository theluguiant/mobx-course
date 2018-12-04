import { json } from '../data/jsondata';
import { Component } from '@angular/core';
import { Pearson } from './store/pearson.store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'mobx-course';
  public data;

  constructor(public pearson: Pearson) {
    this.pearson.setPearsons(json);
  }

}
