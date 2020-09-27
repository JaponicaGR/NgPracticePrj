import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {CardItemDirective} from "../directives/card-item.directive";
import {ListItemDirective} from "../directives/list-item.directive";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input()
  mode: 'list' | 'card' = 'card';

  @Input()
  items: {'title': string, 'description': string }[] = [];

  @ContentChild(CardItemDirective, { read: TemplateRef })
  cardItemTemplate;

  @ContentChild(ListItemDirective, { read: TemplateRef })
  listItemTemplate;

  constructor() { }

  ngOnInit(): void {
  }

}
