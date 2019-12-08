import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  heading = 'Report Page';
  subheading = 'You can generate avtivity report here.';
  icon = 'pe-7s-graph text-success';

  constructor() {
  }

  ngOnInit() {
  }

}
