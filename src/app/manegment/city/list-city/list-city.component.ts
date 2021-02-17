import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.scss']
})
export class ListCityComponent implements OnInit {

  cityColumns:any[]=[
    {
      name:'City Name',
      description:'description'
    }
  ];
  
  cityRows:any[]=[
    {
      titleName:'Theran',
      titleFamily:'center iran'

    },
    {
      titleName:'rey',
      titleFamily:'jonob'

    },
    {
      titleName:'karaj',
      titleFamily:'garb'

    },
  ]
  

  constructor() { }
  
  
  
  ngOnInit(): void {
  }

}
