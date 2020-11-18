import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'createdDate'];

dataSource: any[] = [
  {
    id: '123456',
    cin: '123456',
    name: 'Houcem Chlegou',
    createdDate: '2020-11-02T09:09:00Z',
    cv: 'https://chlegou.com',
    type: 'TEACHER'
  },
  {
    id: '4895',
    cin: '4895',
    name: 'Imene Lahyeni',
    createdDate: '2020-11-02T09:09:00Z',
    cv: 'https://www.cdc.gov/polio/stop/pdf/stop-cv-format.pdf',
    type: 'TEACHER'
  },
  {
    id: '3524',
    cin: '3524',
    name: 'Med Amin',
    createdDate: '2020-11-02T18:09:00Z',
    cv: 'https://www.cdc.gov/polio/stop/pdf/stop-cv-format.pdf',
    type: 'STUDENT'
  }
];
  constructor() { }

  ngOnInit(): void {
  }


}
