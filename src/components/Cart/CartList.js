import React from 'react'
import CartItem from './CartItem';


export default function CartList(props) {

  return (
    <div className="container-fluid">
        {
            props.cart.map(product=>{
              return( 
                
                <CartItem 
                  key={product.id} 
                  product={product}
                  IncrementCount={props.IncrementCount}
                  DecrementCount={props.DecrementCount}
                  ClearCart={props.ClearCart}
                  RemoveProduct={props.RemoveProduct}
                />
            
              )
            })
        }
     
    </div>
  )
}
