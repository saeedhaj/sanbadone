import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-state',
  templateUrl: './list-state.component.html',
  styleUrls: ['./list-state.component.scss']
})
export class ListStateComponent implements OnInit {

stateColumns:any[]=[
  {
    name:'State Name',
    description:'description'
  }
];
stateRows:any[]=[
  {
    titleName:'varimin',
    titleFamily:'fkdflsad'
  },
  {
    titleName:'amol',
    titleFamily:'fkdflsad'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
