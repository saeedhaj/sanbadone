import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { STATE_FORM} from "./state-form";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.scss']
})
export class AddStateComponent implements OnInit {

  stateForm:FormGroup= STATE_FORM.create();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.stateForm.valid){
      console.log(this.stateForm.getRawValue());
      this.router.navigate(['/state/list-state'])
    }
  }
}
