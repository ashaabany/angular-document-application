import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.scss']
})
export class FormResultsComponent {

  @Input() entities: any;
  @Input() selectedOption: string = '';
  @Output() deleteItem = new EventEmitter();


  deleteClicked(index: number) {
    let deletedEntity = this.selectedOption;
    this.deleteItem.emit({deletedEntity, index})
  }


}
