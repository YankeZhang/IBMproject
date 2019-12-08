import {Component, QueryList, ViewChildren} from '@angular/core';
import {DecimalPipe} from '@angular/common';

import {Observable} from 'rxjs';
import {UniversityService} from './demo/country.service';
import {University} from './demo/country';
import {NgbdSortableHeaderDirective, SortEvent} from './demo/sortable.directive';

// @ts-ignore
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  providers: [UniversityService, DecimalPipe]
})
export class DynamicComponent {

  heading = 'Dynamic Tables';
  subheading = 'Basic example of Angular 7 table with sort, search and filter functionality.';
  icon = 'pe-7s-notebook icon-gradient bg-mixed-hopes';

  universities$: Observable<University[]>;
  total$: Observable<number>;

  // @ts-ignore
  @ViewChildren(NgbdSortableHeaderDirective) headers: QueryList<NgbdSortableHeaderDirective>;

  constructor(public service: UniversityService) {
    this.universities$ = service.universities$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
