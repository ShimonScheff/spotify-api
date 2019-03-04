import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropdownListType} from '../../interfaces/dropdownList.interface';

@Component({
  selector: 'app-dropdown-albums',
  templateUrl: './dropdown-albums.component.html',
  styleUrls: ['./dropdown-albums.component.scss']
})
export class DropdownAlbumsComponent implements OnInit {
  @Output('currentAlbum') selectedChange = new EventEmitter();
  @Input('list') list: DropdownListType[] = [];

  constructor() {}

  ngOnInit() {}

  onSelect(selectedAlbum) {
    this.selectedChange.emit(selectedAlbum);
  }

}
