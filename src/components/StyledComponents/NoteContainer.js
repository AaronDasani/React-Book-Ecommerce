import styled from 'styled-components';

export const NoteContainerStyle=styled.div`
    padding:0.4rem;
    height:10vh;
    .container{
        position:relative;
        width:10%;
        height:100%;
        z-index:1031;
    }
    .profilePic{
        width: 80%;
        height:100%;
        border-radius:50%;
        background-size:contain;
    }
    .profilePic:hover{
        cursor:pointer;

    }
    
// ----------MEDIA QUERIES---------
@media(min-width: 1180px) {
    .container{
        width: 10%;
    }
    .triangleContainer p{
        font-size:16px;
    }
    @keyframes SlideFliplikeABoss{
        0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
        100%{
          width: 200%;
          height:200%;
          transform: rotateY(360deg);
          box-shadow: 0px 0px 0px black !important;
          left:82vw;
          bottom:13rem;
      
        }
    }
  
}


@media(max-width: 1180px) {
    .reactangleContainer p{
        width:80%;
    }
    @keyframes SlideFliplikeABoss{
        0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
        100%{
          width: 200%;
          height:200%;
          transform: rotateY(360deg);
          box-shadow: 0px 0px 0px black !important;
          left:84vw;
          bottom: 11rem;;
      
        }
    }

}

   
    //iPad Pro Setting
    @media(max-width: 1100px) and (max-height:1400px) {
        .container{
            width: 17%;
        }
      
        .reactangleContainer small{
            font-size:16px;
            margin-right:120px;
        }
        .triangleContainer p{
            font-size:15px;
            margin-left:0;
        }
        @keyframes SlideFliplikeABoss{
            0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
            100%{
              width: 200%;
              height: 200%;
              transform: rotateY(360deg);
              box-shadow: 0px 0px 0px black !important;
              left:72vw;
              bottom: 15rem;;
          
            }
        }
    }
    @media(max-width: 1100px) and (min-width:600px) and (min-height: 500px) and (max-height:1100px) {
        .container{
            width: 11%;
        }
      
        .reactangleContainer small{
            font-size:16px;
            margin-right:120px;
        }
        .triangleContainer p{
            font-size:13px;
            margin-left:0;
        }
        @keyframes SlideFliplikeABoss{
            0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
            100%{
              width: 200%;
              height: 200%;
              transform: rotateY(360deg);
              box-shadow: 0px 0px 0px black !important;
              left:80vw;
              bottom: 11rem;;
          
            }
        }
    }

        @media(max-width: 800px) {
            .container{
                width: 13%;
            }
            .triangleContainer div{
                left:2rem;
                bottom:0;
            }
            .triangleContainer p{
                font-size:12px;
            }
            @keyframes SlideFliplikeABoss{
                0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
                100%{
                  width: 200%;
                  height: 200%;
                  transform: rotateY(360deg);
                  box-shadow: 0px 0px 0px black !important;
                  left:78vw;
                  bottom: 8rem;;
              
                }
            }
        }
        // iPad Setting
        @media(max-width: 800px) {
            .container{
                width: 18%;
            }
            .triangleContainer div{
                left:2rem;
                bottom:0;
            }
            .triangleContainer p{
                font-size:14px;
            }
            @keyframes SlideFliplikeABoss{
                0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
                100%{
                  width: 200%;
                  height: 200%;
                  transform: rotateY(360deg);
                  box-shadow: 0px 0px 0px black !important;
                  left:73vw;
                  bottom: 12rem;;
              
                }
            }
        }

            @media(max-width: 530px){
                .container{
                    width: 26%;
                }
                .triangleContainer div{
                    top:30%;
                }
                .triangleContainer p{
                    margin-left:0rem;
                    margin-bottom21px;
                    font-size:12px;
                }
            }
                @media(max-width: 500px) {
                    .container{
                        width: 26%;
                    }
                    .messageBoard{
                        height:10vh;
                        top: 120%;

                    }
                    .messageBoard p, .messageBoard small{
                        font-size:0.6rem;
                    }
                    @keyframes displayMessageAnim{
                        0%{
                        visibility: hidden;
                        }
                        100%{
                        top:85%;
                        visibility: visible;
                        }
                    
                    }
                    .reactangleContainer{
                        overflow:scroll;
                        padding:0.3rem;
                        width:100%;
                        padding-top:2rem;
                        height:160%;
                        clip-path: polygon(45% 0,50% 10%,55% 0,97% 0,100% 10%,100% 100%, 0 100%, 0 10%,3% 0);
                    }
                    .reactangleContainer p{
                        font-size:14px;
                        width:100%;
                    }
                    .reactangleContainer small{
                        font-size:12px;

                    }
                    .triangleContainer{
                        width:80%;
                        height:200%;
                        clip-path: polygon(10% 0, 90% 0, 100% 15%,50% 100%,0 15%);
                        bottom:4.5rem;
                        left:3rem;

                    }
                    .triangleContainer div{
                        left:0rem;
                        bottom:0rem;
                        top:43%;
                    }
                    .triangleContainer p{
                        margin-left:0rem;
                        margin-bottom:2px;
                        font-size:11px;
                    }
   
                    @keyframes SlideFliplikeABoss{
                        0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
                        100%{
                        width: 140%;
                        height: 140%;
                        transform: rotateY(360deg);
                        box-shadow: 0px 0px 0px black !important;
                        left:32vw;
                        bottom: 15rem;;
                    
                        }
                    }
                }

                    @media(max-width: 415px) {
                        .container{
                            width: 26%;
                        }
                        .triangleContainer div{
                            top:35%;
                        }
                        .triangleContainer p{
                            margin-left:0rem;
                            margin-bottom21px;
                            font-size:13px;
                        }

                    }

                    @media(max-width: 415px) and (min-width:380px) {
                        .container{
                            width: 27%;
                        }
                        .triangleContainer div{
                            top:38%;
                        }
                        .triangleContainer{
                            left:2.6rem;
                        }

                    }
                    @media(max-width: 415px) and (max-height:825px) {
                        @keyframes SlideFliplikeABoss{
                            0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
                            100%{
                            width: 140%;
                            height: 140%;
                            transform: rotateY(360deg);
                            box-shadow: 0px 0px 0px black !important;
                            left:32vw;
                            bottom: 15rem;;
                        
                            }
                        }

                    }
    
                            @media(max-width: 375px) and (min-width:340px) {
                                .container{
                                    width: 30%;
                                }
                                .triangleContainer{
                                    left:2.4rem;
                                    bottom:4rem;

                                }
                                .triangleContainer div{
                                    top:32%;
                                }
                                .triangleContainer p{
                                    margin-left:0rem;
                                    margin-bottom21px;
                                    font-size:13px;
                                }
                                .clickMe{
                                    width:120%;
                                }
                               

                            }
                            @media(max-width: 375px) and (min-width:340px) and (min-height:800px) {
                                .triangleContainer{
                                    left:2.4rem;
                                    bottom:4.5rem;

                                }
                                @keyframes SlideFliplikeABoss{
                                    0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
                                    100%{
                                    width: 140%;
                                    height: 140%;
                                    transform: rotateY(360deg);
                                    box-shadow: 0px 0px 0px black !important;
                                    left:31vw;
                                    bottom: 15.5rem;;
                                
                                    }
                                }

                            }
                            @media(max-width: 375px) and (min-width:340px) and (max-height:670px) {
                                .container{
                                    width: 27%;
                                }
                                @keyframes SlideFliplikeABoss{
                                    0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
                                    100%{
                                    width: 140%;
                                    height: 140%;
                                    transform: rotateY(360deg);
                                    box-shadow: 0px 0px 0px black !important;
                                    left:31vw;
                                    bottom: 13rem;;
                                
                                    }
                                }

                            }
                                @media(max-width: 330px) {
                                    .triangleContainer{
                                        left:2rem;
                                        bottom:3.5rem;
    
                                    }
                                    .triangleContainer div{
                                        top:30%;
                                    }
                                    .triangleContainer p{
                                        margin-left:0rem;
                                        margin-bottom21px;
                                        font-size:12px;
                                    }
                                    .clickMe{
                                        width:150%;
                                    }
                                    @keyframes SlideFliplikeABoss{
                                        0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
                                        100%{
                                        width: 140%;
                                        height: 140%;
                                        transform: rotateY(360deg);
                                        box-shadow: 0px 0px 0px black !important;
                                        left:33vw;
                                        bottom: 11rem;;
                                    
                                        }
                                    }

                                }
                                @media(max-width: 330px) and (max-height: 790px){
                                    @keyframes SlideFliplikeABoss{
                                        0%{left:0} 10%{bottom: 1rem;} 25%{bottom: 2rem;} 50%{bottom: 4rem;}
                                        100%{
                                        width: 140%;
                                        height: 140%;
                                        transform: rotateY(360deg);
                                        box-shadow: 0px 0px 0px black !important;
                                        left:31vw;
                                        bottom: 11rem;;
                                    
                                        }
                                    }
                                }

`