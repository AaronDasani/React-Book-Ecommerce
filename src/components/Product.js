import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import{ProductWrapper} from './StyledComponents/ProductWrapper';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AddToCart,OpenModal} from './Action/ProductListAction';
import Fade from 'react-reveal/Fade'

class Product extends Component {
  render() {
    const {id,title,img,price,inCart}=this.props.productInfo
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <Fade bottom>
          <div className="card">
            <div className="img-container p-1">
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top" onClick={this.props.handleDetail.bind(this,id)}/>
              </Link>
              <button className="cart-btn" disabled={inCart ? true:false} 
                onClick={()=>{
                  this.props.AddToCart(id);
                  this.props.OpenModal(this.props.productInfo);
                }}>
                {inCart? 
                  (<p className="text-capitalize mb-0" disabled>InCart</p>) : (<i className="fa fa-cart-plus" />)
                }
              </button>
            </div>
            <div className="card-footer text-center">
              <p className="mb-1">{title}</p>
              <small className="text-blue mb-0">
                <span className="mr-1">${price}</span>
              </small>
            </div>
          </div>
        </Fade>
      </ProductWrapper>
    )
  }
}


Product.propTypes={
  productInfo:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired,
  handleDetail:PropTypes.func.isRequired
}

const mapStateToProps=(storeState)=>{
  return{
    productList:storeState.productListR.productList
  }
}

const actionCreator={
  AddToCart,
  OpenModal
}

export default connect(mapStateToProps,actionCreator)(Product);