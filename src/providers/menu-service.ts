import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs'

/*
  Generated class for the MenuService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MenuService {
  selectedItem: string
  itemChanged: Subject<string> = new Subject<string>()
  constructor(public http: Http) {
    this.selectedItem = "javascript"
  }

  setSelectedItem(selectedItem) {
    this.selectedItem = selectedItem
    this.itemChanged.next(this.selectedItem)
    console.log('MenuService:setSelectedItem:', selectedItem)
  }
}
