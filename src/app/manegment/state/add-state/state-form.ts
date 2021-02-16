import{FormGroup, FormControl, Validators}from "@angular/forms";
export const STATE_FORM={
    create:()=>{
        return new FormGroup({
        name:new FormControl('',[Validators.required]),
        description:new FormControl('',[Validators.required]),
        })
    }
}