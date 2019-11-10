import { Members } from './../models/members';
import { MOCK_API } from './../constant/mock_api_constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Customers } from '../models/customers';
// import {  } from '../mocks/customers';

@Injectable()
export class CustomersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchCustomers(): Observable<Customers> {
    return this.httpClient.get<Customers>(
      `${MOCK_API.I_1_FETCH_CUSTOMER}`
    );
  }
  fetchMembers(): Observable<Members> {
    return this.httpClient.get<Members>(
      `${MOCK_API.I_1_FETCH_CUSTOMER}`
    );
  }

  // createEmployee(employee: Employee): Observable<string> {
  //   EMPLOYEES.unshift(employee);
  //   return of('Create success');
  // }

}
