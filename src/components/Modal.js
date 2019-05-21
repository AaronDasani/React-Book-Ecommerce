import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ModalContainer} from './StyledComponents/ModalContainer'
import {CloseModal} from './Action/ProductListAction';
class Modal extends Component {
  render() {
      const {img,title}=this.props.modalProduct
      
    return (
        <ModalContainer className="d-none d-lg-block">
            <div id="modal" style={{visibility:"visible"&& this.props.CloseModal(6) }}>
                <Link to="/cart" onClick={()=>this.props.CloseModal(0)}>
                    <div className="row text-light text-center">
                        <div className="col-3"><img src={img} className="modalImg" alt="bookImg"/></div>
                        <div className="col-6 modalTitle"><small>{title}</small></div>
                        <div className="col-2"><i className="fas fa-cart-plus"></i></div>
                    </div>
                </Link>
            </div>
            
        </ModalContainer>
    )
  }
}
const mapStateToProps=(storeState)=>{
    return{
        modalProduct:storeState.productListR.modalProduct
    }

}
const actionCreator={
    CloseModal
}




export default connect(mapStateToProps,actionCreator)(Modal);