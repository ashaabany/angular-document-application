import { Component, Output } from '@angular/core';
import entityData from './entityData.json';

export interface Entity {
  "Animals": Array<EntityInformation>;
  "Plants": Array<EntityInformation>;
  "Minerals": Array<EntityInformation>;
}
export interface EntityInformation {
  name: string;
  class: string;
}
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  searchOptions = ["Animals", "Plants", "Minerals"]
  searchText: string = this.searchOptions[0];

  @Output() entities: Entity = entityData
  @Output() selectedOption: string = this.searchText;


  selected(filterValue: string) {
   this.selectedOption = filterValue;
  }

  deleteFromData(event: any) {
    let currentEntity: keyof Entity = event.deletedEntity;
    this.entities[currentEntity].splice(event.index, 1)
  }

}
