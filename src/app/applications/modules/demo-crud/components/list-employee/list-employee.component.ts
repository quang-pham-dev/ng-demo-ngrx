import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit
} from '@angular/core';
import { Employee } from '../../../../../shared/models/employee';
import {
  Store
} from '@ngrx/store';
import {
  ApplicationAction,
  EMPLOYEE_ACTIONS
} from '../../../../../shared/ngrx/actions/application.action';
import { PagingService } from '../../../../../shared/services/paging.service';
import { Paging } from '../../../../../shared/models/paging';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements AfterViewInit, OnChanges {

  constructor(
    private appStore: Store<ApplicationAction>,
    private pagingService: PagingService
  ) { }

  @Input() employees: Employee[];
  @Input() isLoading: boolean;

  public paging: Paging;

  ngAfterViewInit() {
    this.appStore.dispatch({
      type: EMPLOYEE_ACTIONS.GET
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.employees && this.employees) {
      this.paging = this.pagingService.firstLoad(this.employees.length, 5);
    }
  }
  prevPage() {
    this.paging = this.pagingService.pageChanges(this.paging.currentPage - 1, this.paging.pageSize, this.paging.pages, this.employees.length);
  }

  nextPage() {
    this.paging = this.pagingService.pageChanges(this.paging.currentPage + 1, this.paging.pageSize, this.paging.pages, this.employees.length);
  }
  selectPage(page: number) {
    this.paging = this.pagingService.pageChanges(page, this.paging.pageSize, this.paging.pages, this.employees.length);
  }

  pageSizeChanges(pageSize: string) {
    this.paging = this.pagingService.pageSizeChanges(parseInt(pageSize), this.employees.length);
  }

}
