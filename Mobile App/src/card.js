import React from 'react';
import {Card, ListGroup} from "react-bootstrap";
// import axios from 'axios'
// import Camera from 'react-html5-camera-photo';
// import './card1.css'


class Cards extends React.Component{

    state = {
        
    }

    render(){
        return(
            <React.Fragment>
                <div style={{borderRadius: "9px",
                    width:"30%",
                    boxShadow: "4px 4px 3px 0px rgba(0, 0, 0, 0.75)",
                    margin:"3vw",
                    background: "linear-gradient(135deg, #c31432, #240b36)",
                    fontWeight: "bold",
                    color: "beige"
                }}>
                
                 <Card style={{background:"linear-gradient(135deg, #c31432, #240b36)"}}>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={{background: "linear-gradient(135deg, #c31432, #240b36)"}}>
                         Name: <span style={{paddingLeft:"1vw"}} id="namec">{this.props.content.name}</span>
                        </ListGroup.Item>
                        <ListGroup.Item style={{background: "linear-gradient(135deg, #c31432, #240b36)"}}>
                            Emp Id: <span style={{paddingLeft:"1vw"}} id="eidc">{this.props.content.eid}</span>
                        </ListGroup.Item>
                        <ListGroup.Item style={{background: "linear-gradient(135deg, #c31432, #240b36)"}}>
                            Time: <span style={{paddingLeft:"1vw"}} id="timec">{this.props.content.attendanceParams[new Date().toLocaleDateString()].timestamp}</span>   
                        </ListGroup.Item>
                    </ListGroup>
                 </Card>
                 </div>
            </React.Fragment>
        );
    };
}
export default Cards;

 {/* <Card body> */}
                     {/* Name:<br/>
                     Eid:{this.props.content.eid}<br/>
                     Time:{this.props.content.attendanceParams[new Date().toLocaleDateString()].timestamp}<br/> */}
                     {/* <span style={{fontFamily: "Roboto", fontSize: "4vh"}}>Eid:</span><br/>
                     <span style={{fontFamily: "Roboto", fontSize: "4vh"}}>Time:</span><br/>
                 </Card> */}

