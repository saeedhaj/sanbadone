import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {


  items:any[]=[
    {
      name:'name',
      description:'description'
    }
  ];
  itemList:any[]=[
    {
      titleName:'ali',
      titleFamily:'haji'

    },
    {
      titleName:'ali',
      titleFamily:'haji'

    },
    {
      titleName:'ali',
      titleFamily:'haji'

    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
