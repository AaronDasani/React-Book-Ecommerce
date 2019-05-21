import styled from 'styled-components';

export const ModalContainer=styled.div`
    position:fixed;
    top:6%;
    right:0;
    bottom:0;
    max-height:20%;
    // background:black;
    // opacity:0.4
    height:8%;
    width:30%;
    #modal{
        background: var(--mainDark);
        border-top-left-radius: 2.5rem;
        border-bottom-left-radius: 2.5rem;
        height:80%;
        width:70%;
        position:absolute;
        padding:0.2rem;
        padding-right:2rem;
        overflow:hidden;
        box-shadow:0px 0px 5px green;
        transition-duration:0.6s;
    }
    #modal:hover{
        background: var(--mainBrown);
        
    }
    #modal a:hover{
        text-decoration:none;
    }
    .modalTitle{
        overflow:hidden
        height:3rem;
    }
    .modalImg{
        width:3.5rem;
        height:3.5rem;
        background-size:contain;
        margin-left:0.1rem;
        border-radius:50%;
        background-position:center;
        background-attachment:fixed;
    }
    #modal i{
        font-size:1.5rem;
        margin-top:0.6rem;
    }

`