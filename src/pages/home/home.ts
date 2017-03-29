import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {AuthService} from '../../providers/auth-service'
import {MenuService} from '../../providers/menu-service'
import {Http} from '@angular/http'

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  items: FirebaseListObservable<any[]>;

  constructor(
    navCtrl: NavController,
    public af: AngularFire,
    public $auth: AuthService,
    public http: Http,
    public $menu: MenuService
  ) {
    this.$menu.itemChanged.subscribe(() => this.fetchItems())
    this.fetchItems()
  }
  fetchItems () {
    console.log('selectedItem changed')
    this.http.get(`http://localhost:5000/?type=reddit&sub=${this.$menu.selectedItem}`).subscribe(response => {
      console.log(response.json())
    })
    this.items = this.af.database.list('public_reading_list/reddit/' + this.$menu.selectedItem, {
      query: {
        limitToLast: 50,
        orderByChild: 'created_at'
      }
    })
  }
}
