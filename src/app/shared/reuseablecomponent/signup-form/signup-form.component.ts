import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  // all form values
 form_data={
  name:'',
  email:'',
  password:'',
  repeatPassword:''
 }

//  Use for confirm password match
 passwordMatchValidator(form: NgForm) {
  if(this.form_data.password !== this.form_data.repeatPassword ){
    form.controls['confirmPassword'].setErrors({ 'passwordMismatch': true });
  }
  else {
    form.controls['confirmPassword'].setErrors(null); // Clear error if passwords match
  }
}

// Submit form
submit_Form(form:NgForm){
 form.reset();
}


}
 