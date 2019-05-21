import React from 'react';


export default function CartItem(props) {
  const {id,title,img,price,count,total}=props.product;
  return (
 
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2 mb-2">
        <img src={img} alt="productIMG" style={{width:"6rem",height:"8rem",boxShadow:"2px 2px 5px black"}} className="img-fluid"/>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">book:</span>
        {title}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1"  onClick={()=>{count>1&&props.DecrementCount(id)}}>-</span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={()=>{props.IncrementCount(id)}}>+</span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
       <div className="cart-icon">
        <i className="fas fa-trash" onClick={()=>{props.RemoveProduct(id)}}></i>
       </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>${total.toFixed(2)}</strong>
      </div>

    </div>
    

  )
}

