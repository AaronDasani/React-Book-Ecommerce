import {IncrementCountAction,DecrementCountAction,ClearCartAction,UpdateCartAction,RemoveProductAction,ClearCartAmountAction} from './Types';

export const UpdateCart=(cart)=>dispatch=>{
    dispatch({type:UpdateCartAction,payload:cart})
}
export const IncrementCount=(id)=>dispatch=>{
    dispatch({type:IncrementCountAction,payload:id})
}
export const DecrementCount=(id)=>dispatch=>{
    dispatch({type:DecrementCountAction,payload:id})
}
export const RemoveProduct=(id)=>dispatch=>{
    dispatch({type:RemoveProductAction,payload:id})

}
export const ClearCart=()=>dispatch=>{
    dispatch({type:ClearCartAction})
    dispatch({type:ClearCartAmountAction})

}