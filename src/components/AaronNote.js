import React, {Component} from 'react'; 
import ProfileImg from '../AaronDasani.jpg';
import Companylogo from '../companyLogo.png';
import Wobble from 'react-reveal/Wobble';
import {NoteContainerStyle} from './StyledComponents/NoteContainer';


export default class AaronNote extends Component {
    constructor(){
        super();
        this.state={
            displayMessage:false,
            MoveProfileAnimationClass:"flip-card-inner MoveProfileAnimation",
            DisplayMessageAnimaionClass:"d-block messageBoard container-fluid fixed-bottom p-0"
        }
    }
    render(){
        return (
            <div className="profileCont">
                <NoteContainer className="container-fluid fixed-bottom">
                    <div className="container ml-2 text-center">
                        <div className="flip-card">
                            <div className={this.state.displayMessage? this.state.MoveProfileAnimationClass:"flip-card-inner"}>
                                <div className="flip-card-front text-center">
                                    <Wobble>
                                        <div className="clickMe">
                                           {this.state.displayMessage? <small className="styledSmall">AARON DASANI</small> : <small>Click Me</small>}
                                        </div>
                                    </Wobble>
                                    <img src={ProfileImg} alt="profileImg" className="profilePic" onClick={()=>this.setState({displayMessage:!this.state.displayMessage})}/>
                                </div>
                                <div className="flip-card-back">
                                    <img src={Companylogo} alt="profileImg" className="profilePic" onClick={()=>this.setState({displayMessage:!this.state.displayMessage})}/>
                                </div>
                            </div>
                        </div>
                    </div> 
             
                    <div className={this.state.displayMessage ? this.state.DisplayMessageAnimaionClass:"unDisplayMessage"}>
                        <div className="reactangleContainer text-light text-center">
                            <p>"I made this <strong>Book Store</strong> project to challenge my knowledge on React, Redux, React-Saga and animation in React.</p>
                            <p>Because this project FOCUS is not on deployment in a web service such as Amazon Web Service or Azure.</p>
                            <p>I used <a href="https://www.netlify.com/">Netlify</a> to deploy this project in the web."</p>
                            <small className="text-muted"> - My other projects are infact deployed in the web using Amazon Web Service(AWS) - </small>
                        </div>
                        <div className="triangleContainer text-light">
                            {window.innerWidth<500?
                            
                                <div className="text-center">
                                    <p><strong>Portfolio:</strong></p>
                                    <p><a href="http://18.212.167.112/">​ http://18.212.167.112/</a></p>
                                </div>
                        
                            :
                                <div className="text-center">
                                    <p><strong>Portfolio:</strong><a href="http://18.212.167.112/">​ http://18.212.167.112/</a></p>
                                    <p><strong>Github:</strong>​<a href="https://github.com/AaronDasani"> https://github.com/AaronDasani</a></p>
                                </div>
                            }
                        </div>
                    </div>
                </NoteContainer>
            </div>
        )
    }
}

const NoteContainer=NoteContainerStyle;
