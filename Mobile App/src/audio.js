import React,{Component} from 'react';
// import './App.css';
import Recorder from 'recorder-js';

class Audio extends Component {

  state = {
    isRecording: false,
    blob:null,
  }

  componentDidMount(){
    // console.log("hey");
  }
  ready = () => {
    document.querySelector("#audio"+this.props.index).style.display = "block"
    document.querySelector("#span"+this.props.index).style.display = "none"

    const audioContext =  new (window.AudioContext || window.webkitAudioContext)();
    this.recorder = null;
 
    this.recorder = new Recorder(audioContext, {});
    
    navigator.mediaDevices.getUserMedia({audio: true})
    .then(stream => {
      this.recorder.init(stream);
      this.startRecording();
    })
    .catch(err => console.log('Uh oh... unable to get stream...', err));

  }

  dusted = () => {
    document.querySelector("#audio"+this.props.index).style.display = "none"
    document.querySelector("#span"+this.props.index).style.display = "block"

    this.stopRecording();
  }

  startRecording = () => {
    console.log(this.recorder,"hey");
    this.recorder.start()
      .then(() => this.setState({isRecording:true})).catch(e => console.log(e))
  }
   
  stopRecording = () => {
    this.recorder.stop()
      .then(({blob, buffer}) => {
        this.setState({blob});
        console.log("in",this.state.blob)
        this.download();
        // buffer is an AudioBuffer
      });
  }
   
  download = () => {
    Recorder.download(this.state.blob, 'audio'+this.props.index); // downloads a .wav file
    console.log("Downloaded");
  }

  render(){
    console.log("fhkf",this.props.index);
  return (
    <div style={{marginTop:"3vh"}} className="App">
      {/* <h1>Hey there!!</h1>
      <button onClick = {this.ready}> Start </button>
      <button onClick = {this.dusted}> Stop </button> */}
      <div style={{width: "30vw",
        marginLeft:"2vw",
        display: "flex",
        alignItems:"center",
        justifyContent: "space-around",
        height: "10vh",
        borderRadius: "40px",
        // paddingLeft:""
        backgroundColor: "#011e31"}}> 
        <img onClick = {this.ready} style={{width: "2vw"}}src={require("./play-button.png")}></img>
        <span style={{color:"#717a81"}} id={"span"+this.props.index}>{"Recording "+this.props.index}</span>
        <img id={"audio"+this.props.index} style={{width: "10vw", height: "5vh",display: "none"}} src={require("./record1.gif")}></img>
        <img onClick = {this.dusted} style={{width: "2vw"}} src={require("./square.png")}></img>
      </div>
    </div>
  );
  }
}


export default Audio;



