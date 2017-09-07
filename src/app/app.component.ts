import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users=["sugata1", "sugata2", "sugata3"];



  /**Declaring myForm of Type FormGroup */
  myForm: FormGroup;


  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    /**
     * Using Form Group
     * Creating Instance of FromGroup and passing object
     * with key value pair for the form. */
    // this.myForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName : this.lastName
    // });

    /**Using FormBuilder*/
    this.myForm = this.fb.group({
      'email': ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\..[a-z]{2,3}$'), Validators.required, Validators.minLength(8)]],

    });

    /**SetValue */
    // this.myForm.setValue({
    //   'firstName': 'Sachin',
    //   'lastName': 'Tendulkar',
    //   'favShot': 'Long Drive',
    //   'playerType': 'Batsman'
    // });

    /**Patch Value */
    // this.myForm.patchValue({
    //   'firstName': 'Sachin',
    //   'lastName': 'Tendulkar',
    //   'favShot': 'Long Drive',
    // });


  }

}
