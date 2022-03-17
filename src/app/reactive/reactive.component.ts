import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent implements OnInit {
	reactiveForm!: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  	this.reactiveForm=new FormGroup({
  	firstname:new FormControl('',[Validators.required,Validators.minLength(5)]),
  	lastname:new FormControl('',[Validators.required,Validators.maxLength(6)]),
  	email:new FormControl('',[Validators.required, Validators.email]),
  	password:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'), Validators.minLength(6)])
    
  })
  }

  onSubmit(){
  console.log(this.reactiveForm.value);
  }

  get firstname(){
    return this.reactiveForm.get('firstname');
  }
  get email(){
    return this.reactiveForm.get('email');
  }

  get password(){
    return this.reactiveForm.get('password');
  }
  get lastname(){
    return this.reactiveForm.get('lastname');
  }
  get confirmpassword(){
    return this.reactiveForm.get('confirmpassword');
  }

}
