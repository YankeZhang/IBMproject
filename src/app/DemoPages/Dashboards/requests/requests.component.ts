import {Component, QueryList, ViewChildren} from '@angular/core';
import {DecimalPipe} from '@angular/common';

import {Observable} from 'rxjs';
import {RequestService} from './demo/request.service';
import {Request} from './demo/request';
import {NgbdSortableHeaderDirective, SortEvent} from './demo/sortable.directive';

// @ts-ignore
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  providers: [RequestService, DecimalPipe]
})
export class RequestsComponent {

  heading = 'Requests';
  subheading = 'You can view all requests here.';
  icon = 'pe-7s-notebook icon-gradient bg-mixed-hopes';

  requests$: Observable<Request[]>;
  total$: Observable<number>;

  // @ts-ignore
  @ViewChildren(NgbdSortableHeaderDirective) headers: QueryList<NgbdSortableHeaderDirective>;

  constructor(public service: RequestService) {
    this.requests$ = service.requests$;
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
