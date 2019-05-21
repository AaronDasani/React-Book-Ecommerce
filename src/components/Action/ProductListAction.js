import {InsertProductAction,ProductDetailsAction, AddToCartAction,OpenModalAction,CloseModalAction} from './Types';

export const InsertProductsList=(storeProducts)=>dispatch=>{
    console.log("insert Product-- action call");
    dispatch({type:InsertProductAction, payload:storeProducts})
}
export const FetchProductDetails=(detailProduct)=>dispatch=>{
    dispatch({type:ProductDetailsAction, payload:detailProduct})
}
export const AddToCart=(id)=>dispatch=>{
    dispatch({type:AddToCartAction,payload:id})
}
export const OpenModal=(product)=>dispatch=>{
    dispatch({type:OpenModalAction,payload:product})
}
export const CloseModal=()=>dispatch=>{
    // toString(timeFrame);
    // const time=parseInt(timeFrame+"000");
    // setTimeout(()=>dispatch({type:CloseModalAction}),time);  
    dispatch({type:CloseModalAction})  
}
