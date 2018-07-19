import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ToDoListComponent implements OnInit {
  title: string = 'Products List';
  progressListProducts: string = 'Working';


  constructor() { }

  ngOnInit() {
  }

  productArr: {productName: string, progressListProducts:string}[] = [
    { 
      productName: 'Beer',
      progressListProducts: this.progressListProducts
    },
    {
      productName: 'Beaf',
      progressListProducts: this.progressListProducts
    },
    {
      productName: 'Pork',
      progressListProducts: this.progressListProducts
    }
  ];

  addItem(productArr: object[], itemName: string, itemStatus: string): any {
    let newProdArr: object[] = [{
      productName: itemName,
      progressListProducts: itemStatus
    }];  
    productArr = productArr.concat(newProdArr);
    return productArr;
  }

  onChangeProgress(index: number) {
    this.productArr[index].progressListProducts = 'Complete';
  }

  onAddProduct(itemName: string) {
    this.productArr = this.addItem(this.productArr, itemName, this.progressListProducts);
  }

  onRemoveProduct(index: number) {
    this.productArr.splice(index, 1);
  }


}
