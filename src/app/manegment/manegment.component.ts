import { Component, OnInit } from '@angular/core';
import { ListCityComponent } from "./city/list-city/list-city.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-manegment',
  templateUrl: './manegment.component.html',
  styleUrls: ['./manegment.component.scss']
})
export class ManegmentComponent implements OnInit {

  showFiller = false;
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(ListCityComponent,{
      height: '450px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}
