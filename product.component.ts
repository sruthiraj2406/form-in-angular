import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pid:number
  name:string
  price:number
  productlist:any[]=[]
  constructor() { }

  ngOnInit() {
  }
  save()
  {

    // console.log("PID:",this.pid)
    // console.log("NAME:",this.name)
    // console.log("PRICE:",this.price)
  let obj=new ProductComponent()
  obj.pid=this.pid
  obj.name=this.name
  obj.price=this.price
  
 this.productlist.push(obj);
 
  }

}
