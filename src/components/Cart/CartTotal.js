import React from 'react'
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotal(props) {

  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                        type="button"
                        onClick={()=>{props.ClearCart()}}
                        >clear cart</button>
                    </Link>
                    <h5>
                        <span className="text-title">Subtotal:</span>
                        <strong>${props.cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">Tax:</span>
                        <strong>${props.cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">Total:</span>
                        <strong>${props.cartTotal}</strong>
                    </h5>
                    <PayPalButton 
                        total={parseInt(props.cartTotal)} 
                        clearCart={props.ClearCart}
                        history={props.history}
                    />
                </div>
            </div>
        </div>

    </React.Fragment>
  )
}
