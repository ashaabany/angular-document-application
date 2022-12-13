import { Component, Output } from '@angular/core';
import entityData from './entityData.json';
import { Entity } from './IEntity'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  searchOptions = ["Animals", "Plants", "Minerals"]
  //default option is the first in the array - "Animals"
  searchText: string = this.searchOptions[0];

  //Entity is provided from the IEntity interface
  @Output() entities: Entity = entityData
  @Output() selectedOption: string = this.searchText;

  // checks which item was selected and outputs it to child component
  selected(filterValue: string) {
   this.selectedOption = filterValue;
  }

  // event is emitted from child and resolved here to delete an entry
  deleteFromData(event: any) {
    let currentEntity: keyof Entity = event.deletedEntity;
    this.entities[currentEntity].splice(event.index, 1);
  }

}
