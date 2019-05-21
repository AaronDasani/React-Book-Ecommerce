import React, { Component } from 'react';
import {connect} from 'react-redux';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';

import {UpdateCart,IncrementCount,DecrementCount,ClearCart,RemoveProduct} from '../Action/CartAction';

class Cart extends Component {

  componentDidMount=()=>{
    this.props.UpdateCart(this.props.ProductListCart)
  }
  componentDidUpdate=()=>{
    if ((this.props.ProductListCart.length!==this.props.cart.length) && this.props.cart.length>0) {
      this.props.UpdateCart(this.props.ProductListCart);
      
    }

  }
  removeProduct=(id)=>{
    this.props.RemoveProduct(id);
    
  }

  render() {
    return (
      <section>
        
        {this.props.cart.length>0? 
          (
            <React.Fragment>
              <Title name="Your" title="cart"></Title>
              <CartColumns/>
              <CartList 
                cart={this.props.cart} 
                IncrementCount={this.props.IncrementCount}
                DecrementCount={this.props.DecrementCount}
                RemoveProduct={this.removeProduct}
              />
              <CartTotal                 
                cartSubTotal={this.props.cartSubTotal.toFixed(2)} 
                cartTotal={this.props.cartTotal.toFixed(2)}
                cartTax={this.props.cartTax}
                ClearCart={this.props.ClearCart}
                history={this.props.history}
              />
            </React.Fragment>
          ): <EmptyCart/>
        }
        
       
      </section>
    )
  }
}
const mapStateToProps=(storeState)=>{
  return{
    ProductListCart: storeState.productListR.cart,
    cart:storeState.cartR.cart,
    cartSubTotal:storeState.cartR.cartSubTotal,
    cartTotal:storeState.cartR.cartTotal,
    cartTax:storeState.cartR.cartTax
  }
}
const actionCreator={
  UpdateCart,
  IncrementCount,
  DecrementCount,
  ClearCart,
  RemoveProduct
}

export default connect(mapStateToProps,actionCreator)(Cart)
