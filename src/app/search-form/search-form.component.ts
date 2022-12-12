import { Component } from '@angular/core';
import entityData from './entityData.json';

export interface Entity {
  "Animals": Array<Information>;
  "Plants": Array<Information>;
  "Minerals": Array<Information>;
}
export interface Information {
  name: string;
  class: string;
}

const entities: Entity = entityData

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  
  entities: Entity = entityData

  ngOnInit() {
    console.log(this.entities["Animals"]);
  }

}
