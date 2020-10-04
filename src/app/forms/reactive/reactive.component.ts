import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      fname: [''],
      lname: [''],
      isdriver: [true]
    })

  }

}
