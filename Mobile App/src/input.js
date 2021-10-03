import React from 'react';
import {Form,Row,Col} from 'react-bootstrap';
import './input.css';
class Texts extends React.Component{
    render(){
        return(
            <Form>
  <Row>
    <Col>
      <Form.Control style={{backgroundColor:"#011E31"}} className="fontf eid" placeholder="Employee ID" />
    </Col>
    <Col>
      <Form.Control style={{backgroundColor:"#011E31"}} className="fontf firstname" placeholder="Name" />
    </Col>
  </Row>
</Form>
        );
    };
}
export default Texts;