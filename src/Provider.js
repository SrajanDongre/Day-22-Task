import React,{useState} from 'react';
import {CartContext} from "./Context";

let AllProducts = [
  [
      {
          "name":"Product-1",
          "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          "category":"Fancy Product",
          "price":"$80.00",
          "oldprice":"$40.00",
          "rating":0,
          "action":"Add to cart",
          "qty":0,
          "isAdded": false
      },
      {
          "name":"Product-2",
          "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          "category":"Special Item",
          "price":"$18.00",
          "oldprice":"$20.00",
          "rating":0,
          "action":"Add to cart",
          "qty":0,
          "isAdded": false
      },
      {
          "name":"Product-3",
          "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          "category":"Sale Item",
          "price":"$25.00",
          "oldprice":"$50.00",
          "rating":0,
          "action":"Add to cart",
          "qty":0,
          "isAdded": false
      },
      {
          "name":"Product-4",
          "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          "category":"Popular Item",
          "price":"$40.00",
          "oldprice":"$40.00",
          "rating":0,
          "action":"Add to cart",
          "qty":0,
          "isAdded": false
      },
      {
          "name":"Product-5",
          "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          "category":"Sale Item",
          "price":"$50.00",
          "oldprice":"$25.00",
          "rating":0,
          "action":"Add to cart",
          "qty":0,
          "isAdded": false
      },
      {
          "name":"Product-6",
          "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          "category":"Fancy Product",
          "price":"$120.00",
          "oldprice":"$280.00",
          "rating":0,
          "action":"Add to cart",
          "qty":0,
          "isAdded": false
      },
      {
          "name":"Product-7",
          "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          "category":"Special item",
          "price":"$18.00",
          "oldprice":"$20.00",
          "rating":0,
          "action":"Add to cart",
          "qty":0,
          "isAdded": false
      },
      {
          "name":"Product-8",
          "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          "category":"Popular Item",
          "price":"$40.00",
          "oldprice":"$40.00",
          "rating":0,
          "action":"Add to cart",
          "qty":0,
          "isAdded": false
      }
  ]
];

const Provider= (props)=>{
  const [cartList , setCartList] = useState([]);

  return(
    <CartContext.Provider
      value={{
        cartList,
        AllProducts,
        addToCart : (Product)=>{
          console.log(Product);
          setCartList([...cartList, Product])
        }
      }}
    >
      {props.children}
      {/* TODO */}
    </CartContext.Provider>  
  );
};
export default Provider;