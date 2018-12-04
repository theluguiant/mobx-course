import { Pearson } from '../store/pearson.store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {

  constructor(public _pearson: Pearson) { }

  ngOnInit() {
  }

  onKey(event: any) { 
    this._pearson.setValue(event.target.value);
  }
}
