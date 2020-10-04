import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  public user = {
    firstName: null,
    password: null,
  }

  constructor() { }

  ngOnInit(): void {

  }


  onSubmitTemplateBased () {
    console.log(this.form.value);
  }
}
