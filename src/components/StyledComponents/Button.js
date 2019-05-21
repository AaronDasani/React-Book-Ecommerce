import styled from 'styled-components';


export const ButtonContainer=styled.button`
text-transform: capitalize;
font-size: 1.2rem;
background: transparent;
border: 0.07rem solid var(--mainWhite);
cursor:pointer;
transition: all 0.5s ease-in-out;
color:var(--mainWhite);
padding:0rem 0.6rem;

&:hover{
  background: var(--lightBrown);
  color: var(--mainDark);
  border: 0.07rem solid var(--mainDark);
}
&:focus{
  outline:none;
}
`