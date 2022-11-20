import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {


  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.checkoutForm.reset();
  }
}