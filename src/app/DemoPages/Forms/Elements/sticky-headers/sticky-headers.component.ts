import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sticky-headers',
  templateUrl: './sticky-headers.component.html',
  styles: []
})
export class StickyHeadersComponent implements OnInit {

  heading = 'Request Detail';
  subheading = 'You can see request detail here.';
  icon = 'lnr-map text-info';

  constructor() {
  }

  ngOnInit() {
  }

}
