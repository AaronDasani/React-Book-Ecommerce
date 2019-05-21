import React, { Component } from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './StyledComponents/Button';
import {connect} from 'react-redux';
import {AddToCart,OpenModal,CloseModal} from './Action/ProductListAction';

class Details extends Component {
  render() {
    const {id,title,img,price,inCart,Arthor,info}=this.props.detailProduct
    return (
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-4 my-3">
            <Fade left>
              <img src={img} className="img-fluid" alt="productImg"/>
              <div className="text-center">
                <Link to="/">
                  <DetailButtonContainer>BACK</DetailButtonContainer>
                </Link>
                <DetailButtonContainer cartBtn disabled={inCart? true:false} 
                  onClick={()=>{
                    this.props.AddToCart(id)
                    this.props.OpenModal(this.props.detailProduct);
                  }}>
                  {inCart? "IN-CART":"ADD TO CART"}
                </DetailButtonContainer>
              </div>
            </Fade>
          </div>
          <div className="col-10 mx-auto col-md-8 my-3 text-capitalize ProductDetail">
            <Fade top>
              <h3>{title}</h3>
              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Author: <span className="text-uppercase">{Arthor}</span></h4>
              <h6 className="text-blue">
                <strong>price: <span>$</span>{price}</strong>
              </h6>
              <p className="text-capitalize font-weight-bold mt-3 mb-0">Overview</p>
            </Fade>
            <hr/>
            <Fade bottom>
            <p className="text-muted">{info}</p>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}



const DetailButtonContainer=styled(ButtonContainer)`
  color:var(--mainDark);
  vertical-align:top;
  background:var(--mainWhite);
  border: 0.06rem solid var(--mainDark);
  border-left: ${props=>props.cartBtn&& "0rem"};
  padding:0.3rem 0.7rem;
  width:50%;
  height:4rem;
  &:hover{
    color:var(--mainWhite);
    background:var(--mainBrown);
  }
`;


const mapStateToProps=(storeState)=>{
  return{
    detailProduct:storeState.productListR.detailProduct,
  }
}
const actionCreator={
  AddToCart,
  OpenModal,
  CloseModal
}
export default connect(mapStateToProps,actionCreator)(Details);


