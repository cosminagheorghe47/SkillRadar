import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from '../../helpers/validateForm';
//import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit{
  type: string = "password";
  isVisible: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    //private authentificationService: AuthentificationService, 
    private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPassword() {
    this.isVisible = !this.isVisible;
    this.isVisible ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isVisible ? this.type = "text" : this.type = "password";
  }

  onSubmit() {
    if (this.signupForm.valid) 
    {
      // this.authentificationService.signUp(this.signupForm.value)
      // .subscribe({
      //   next:(response) => 
      //   {
      //     this.toast.success({ detail:"SUCCESS", summary: response.message, duration: 5000});
      //     this.router.navigate([''] );
      //     this.signupForm.reset();
      //   },
      //   error:(error) => 
      //   {
      //     this.toast.error({ detail:"ERROR", summary: error.message, duration: 5000});
      //   }
      // })
    }
    else {
      ValidateForm.validateAllFormFields(this.signupForm);
    }
  }
}
