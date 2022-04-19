import { isNgTemplate } from "@angular/compiler"
import {Component} from '@angular/core';


function Items(){ 
const inventory = [{
    item: 'Tongs',
    price: 2,
  },
  {
    item: 'Pan',
    price: 3,
  },
  {
    item: 'Knife',
    price: 4,
  },
  {
    item: 'Pot',
    price: 3,
  }
  ]
}

Component({
    selector: 'items',
    template: '<h2>Items</h2>'
})

export default Items