import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {connect} from 'react-redux';
import {FetchProductDetails} from './Action/ProductListAction';
import PropTypes from 'prop-types'

class ProductList extends Component {

  getItem=(id)=>{
    const product=this.props.productList.find(item=>item.id===id);
    return product;
  }
  handleDetail=(id)=>{
    const product=this.getItem(id);
    console.log(product);
    this.props.FetchProductDetails(product);
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5 mt-5">
          <div className="container">
            <Title name="Our" title="Books"/>
            <div className="row mt-5">
              {
                this.props.productList.map(product=><Product key={product.id} productInfo={product} handleDetail={this.handleDetail}/>)
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

ProductList.propTypes={
  FetchProductDetails:PropTypes.func.isRequired
}



const mapStateToProps=(storeState)=>{
  return {
    productList:storeState.productListR.productList
  }
}
const actionCreator={
  FetchProductDetails,
}

export default connect(mapStateToProps,actionCreator)(ProductList);