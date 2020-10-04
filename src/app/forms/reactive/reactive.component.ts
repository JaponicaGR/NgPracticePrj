import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {


  public myForm: FormGroup;
  public FgArray = new FormArray([]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      fname: ['', Validators.required],
      lname: [''],
      isdriver: [false],
      driver: this.FgArray
    })

    this.myForm.get('isdriver').valueChanges.subscribe(isDriver => {
      if (isDriver) {
        this.FgArray.push(
          this.fb.group({
            plate: ['', Validators.required],
            licenseDate: ['', Validators.required]
          })
        );
      }
    })

  }


  submitForm() {
    console.log(this.myForm);
  }

}
