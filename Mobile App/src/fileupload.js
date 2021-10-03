import React from 'react';
import {Button,InputGroup,FormControl} from 'react-bootstrap';
import "./fileupload.css";
// import axios from 'axios'
import openSocket from 'socket.io-client';
const socket = openSocket('http://192.168.43.218:2000');








class Fileupload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    uploadFiles = () => {
      var form = new FormData()
      var img = document.querySelector("#inputGroupFile01").files[0]
      form.append("eid","hello")
      form.append("image",img)

      fetch("http://192.168.43.218:2000/backupImage",{
        method:"POST",
        headers: {
          "Content-Type":"multipart/form-data",
          "Accept":"application/json",
          "type":"formData"
        },
        body: form
      }).then((res => {
        console.log(res)
      })).catch(e => console.log(e))
      }
      componentDidMount(){
        socket.on("changeAttendance",(val) =>{
          console.log(val);
        })
      }
  
    render() {
      return (
          <div>

        <div className="input-group fontf">
  <div className="custom-file" >
    <input
      type="file"
      className="custom-file-input"
      id={this.props.idprop}
      aria-describedby="inputGroupFileAddon01"
      multiple
    />
    {/* {console.log(document.querySelector(".custom-file-input").files)} */}
    <label className="custom-file-label" htmlFor={this.props.idprop}  style={{
        width:"43%",
        marginLeft:"5%",
        marginTop:"0%",
        // marginBottom:"100%",
        top:"58vh",
        left:"35.5vw"
    }
        
    }>
      {this.props.data}
    </label>
  </div>
    </div>  
        </div>
      );
    }
  }
  
  export default Fileupload;