import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.css']
})
export class TemplateOutletComponent implements OnInit {

  items = [
    {title: 'Angular', description: 'Google\'s SPA Frontend framework'},
    {title: 'ReactJS', description: 'Facebook\'s Frontend library'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
