import {IncrementCountAction,DecrementCountAction,UpdateCartAction,ClearCartAmountAction} from '../../Action/Types';

const initialState={
    cart:[],
    cartSubTotal:0,
    cartTotal:0,
    cartTax:0
}

export default (state=initialState,action)=>{
    let newOuput={}
    let newAmounts={}
    
    switch (action.type) {
        case UpdateCartAction: 
            
            newAmounts=CalculateTotalPrice(action.payload);
           return{
                ...state,cart:[...action.payload], ...newAmounts
            }

        case IncrementCountAction:
            newOuput=getItem(state.cart,action.payload);
            newOuput.product.count=newOuput.product.count+1;
            newOuput.product.total=(newOuput.product.total+newOuput.product.price);

            // ReCalculate subtotal,total, and taxes
            newAmounts=CalculateTotalPrice(newOuput.newCart);
            return {
                ...state,cart:newOuput.newCart, ...newAmounts
            }
        case DecrementCountAction:
            newOuput=getItem(state.cart,action.payload)
            newOuput.product.count=newOuput.product.count-1;
            newOuput.product.total=(newOuput.product.total-newOuput.product.price);

            // ReCalculate subtotal,total, and taxes
            newAmounts=CalculateTotalPrice(newOuput.newCart);
            return {
                ...state,cart:newOuput.newCart, ...newAmounts
            }

        case ClearCartAmountAction:
            return{
                ...state,cartSubTotal:0,cartTotal:0,cartTax:0
            }
    
        default:
            return{
                ...state
            }
    }
}

function getItem(cart,id){
    let newCart=[...cart]
    const product=newCart.find(p=>p.id===id);
    return {product,newCart};
}
function CalculateTotalPrice(cart){
    // calculate subTotal
    let cartSubTotal=0;
    cart.map(product=>cartSubTotal+=product.total);
    // calculate Taxes
    const cartTax=parseFloat((cartSubTotal*0.1).toFixed(2));
    // calculate Total
    const cartTotal=cartSubTotal+cartTax;

    return {cartSubTotal,cartTax,cartTotal};
}