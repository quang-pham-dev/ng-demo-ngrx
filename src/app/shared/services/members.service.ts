import { Members } from './../models/members';
import { MOCK_API } from './../constant/mock_api_constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Customers } from '../models/customers';
// import {  } from '../mocks/customers';
import { DeleteMemberRequest } from '../models/model-request/delete-member-request';
import { UpdateMemberRequest } from '../models/model-request/update-member-request';

@Injectable()
export class MembersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchMembers(): Observable<Members> {
    return this.httpClient.get<Members>(
      `${MOCK_API.I_2_FETCH_MEMBERS}`
    );
  }

  createMember(member: Members): Observable<Members> {
    return this.httpClient.post<Members>(`${MOCK_API.I_3_CREATE_MEMBERS}`, member);
  }
  updateMember(updateMemberRequest: UpdateMemberRequest): Observable<any> {
    return this.httpClient.put<Members>(`${MOCK_API.I_5_UPDATE_MEMBERS}/${updateMemberRequest.id}`, updateMemberRequest);
  }

  deleteMember(deleteMemberRequest: DeleteMemberRequest): Observable<any> {
    return this.httpClient.delete<any>(`${MOCK_API.I_4_DELETE_MEMBERS}/${deleteMemberRequest.id}`);
  }

}
