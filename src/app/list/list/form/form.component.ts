import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  productName: string = 'Chicken';
    
  constructor() { }

  ngOnInit() {
  }

  onProductName(e) {
    this.productName = e.target.value;
  }

  onAddProduct() {
    this.itemAdded.emit(this.productName);
  }
}
