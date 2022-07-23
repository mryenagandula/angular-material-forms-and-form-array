import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  public form:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.formInit();
  }

  ngOnInit(): void { 
    
  }

  private formInit(){
    this.form = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      username: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.maxLength(8), Validators.maxLength(25)]],
      hobbies: this.fb.array([
        this.fb.group({
          hobbie:['', [Validators.required]]
        })
      ])
    });
  }

  public get hobbies(){
    return this.form.get('hobbies') as FormArray;
  }

  public addHobbie(){
    const hobbie = this.fb.group({
      hobbie:['', [Validators.required]]
    })
    this.hobbies.push(hobbie)
  }

  public removeHobbie(index){
    this.hobbies.removeAt(index)
  }

  public submitForm(){
    console.log(this.form);
    console.log(this.form.getRawValue())
  }

}
