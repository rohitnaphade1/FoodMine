import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/fs.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
constructor(private carService: CartService){ 
  
  this.setCart();
}
 ngOnInit(): void {
    
  }
  removeFromCart(carItem:CartItem){
    this.carService.removeFromCart(carItem.food.id);
    this.setCart();
  }

  changeQuantity(CartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.carService.changeQuantity(CartItem.food.id,quantity);
  }


  setCart(){
    this.cart =this.carService.getCart();
  
  }
  

}

