import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { ADD_FORM } from "./add-form";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

  addForm:FormGroup=ADD_FORM.create();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.addForm.valid){
      console.log(this.addForm.getRawValue());
      this.router.navigate(['/list-city'])
    }
  }
}
