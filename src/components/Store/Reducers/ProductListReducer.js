
import {InsertProductAction,ProductDetailsAction,AddToCartAction,OpenModalAction,ClearCartAction,RemoveProductAction} from '../../Action/Types';


const initialState={
    productList:[],
    detailProduct:{},
    cart:[],
    modalOpen:false,
    modalProduct:{}
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case InsertProductAction: 
            return{...state,productList:action.payload};

        case ProductDetailsAction:
        
            return{...state,detailProduct:action.payload};

        case AddToCartAction:
            // create a new copy of the productList
           let newProductList=[...state.productList];
            
           // find the product with the matching id and update some of its properties.
           const product=newProductList.find(product=>product.id===action.payload)
           product.inCart=true;
           product.count=1;
           const price=product.price
           product.total=price;

           return {...state,detailProduct:{...product}, productList:[...newProductList], cart:[...state.cart,product]};
        
        case OpenModalAction:
            return{
                ...state,modalOpen:true,modalProduct:action.payload
            }
        case "CloseModal_Async":
            return{
                ...state,modalOpen:false
            }

        case ClearCartAction:
            let new_productList=[...state.productList];
            new_productList.map(p=>p.inCart&& (p.inCart=!p.inCart))

            return{
                ...state,cart:[],productList:[...new_productList]
            }
            
        case RemoveProductAction:
            // find the cart item in the cart list and remove it
            const newCart=[...state.cart];
            const matchCart=newCart.filter(product=>product.id===action.payload);
            let index=newCart.indexOf(...matchCart);
            newCart.splice(index,1);
            
            // Find the removed item from the product list and chnage the boolean inCart to false.
            const newList=[...state.productList]
            index=newList.indexOf(...matchCart);
            newList[index].inCart=false;
            
            return {
                ...state,productList:[...newList],cart:[...newCart]
            }

        
        default:
            return state;
    }
}

