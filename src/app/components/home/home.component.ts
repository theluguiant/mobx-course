import { Component, OnInit } from '@angular/core';
import { Pearson } from '../../store/pearson.store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _pearson: Pearson) { }

  ngOnInit() {
  }

}
