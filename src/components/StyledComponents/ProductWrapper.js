import styled from 'styled-components';
export const ProductWrapper=styled.div`
.card{
  border-color:transparent;
  transition:all 0.5s linear;
  border-radius:0px;
}
.card-footer{
  background:transparent;
  border-top:transparent;
  border-radius:0px;
  transition:all 0.4s linear;
}
&:hover{
  .card-footer{
    background:rgba(250,250,250);
  }
}
.img-container{
  position: relative;
  overflow: hidden;
}
.card-img-top{
  transition:all 0.3s linear;
}
.img-container:hover .card-img-top{
  transform:scale(1.03)
}
.cart-btn{
  position:absolute;
  bottom:0;
  right:0;  
  padding: 0.2rem 0.4rem;
  background:var(--lightBrown);
  color:var(--mainWhite);
  border:none;
  font-size:1.4rem;
  transform:translate(0,100%);
  transition:all 0.4s linear;
  width:100%;
  min-height:15%;
  opacity:0.7;
}
.card:hover .cart-btn{
  transform:translate(0,0);
}
.cart-btn:hover{
  color:var(--mainWhite);
  opacity:1;
  cursor:pointer;
  outline:none;
}
.fa-cart-plus{
  font-size:1.70rem;
}
`