import { Component, OnInit } from '@angular/core';
import { Pearson } from '../../store/pearson.store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public _pearson: Pearson) {
    this._pearson.setValue('Klein');
  }

  ngOnInit() {
  }

}
