import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import AaronNote from './components/AaronNote';

import {connect} from 'react-redux'
import {InsertProductsList} from './components/Action/ProductListAction';
import {storeProducts} from './data';

class App extends Component {

  componentDidMount=()=>{
    this.props.InsertProductsList(storeProducts);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        {this.props.modalOpen&& <Modal/>}
        <AaronNote/>
      </React.Fragment>
    )
  }
}
const mapStateToProps=(storeState)=>{
  return{
      modalProduct:storeState.productListR.modalProduct,
      modalOpen:storeState.productListR.modalOpen
  }

}
const actionCreator={
  InsertProductsList:InsertProductsList
}

export default connect(mapStateToProps,actionCreator)(App);
