import React, { Component } from 'react';
import Card2 from './card';
import openSocket from 'socket.io-client';
import './dashboard.css'
import Axios from 'axios';
import Chart from './Charts'
const socket = openSocket('http://192.168.43.218:2000');



export default class  Dashboard
 extends Component {
     state={
         cardlist:[],

     }
     componentDidMount(){
        socket.on("changeAttendance",(val) =>{
        console.log(val);
      
        let obj=this.state.cardlist.concat(val);
        this.setState({
            cardlist:obj
        })
      })
      Axios.get('http://192.168.43.218:2000/getUsers').then(res =>{
          console.log("here",res)
          this.setState({cardlist: res.data.body});

      })
    //   document.querySelector("rect").setAttribute("fill","black");

     }

     renderCards = () => {
        return this.state.cardlist.map(ele => {
            return <Card2 content={ele} />
        })  
     }
    render() {
        return (
            <div style={styles.maind}>
            <div style={styles.carddiv}>
                {/* <Card2/> */}
                {this.renderCards()}
            </div>
            <div style={styles.chartdiv}>
                <Chart present={this.state.cardlist.length} total={10}/>
            </div>
            </div>
        )
    }
}

const styles = {
    maind: {
        display: "flex",
        flexDirection:"row",
        flex: 1
    },
    carddiv:{
        width: "60%",
        display:"flex",
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent: "center",
        overflowY:"auto"
    },
    chartdiv:{
        width:"20%",
        justifyContent: "center",
        alignItems:"center",
        display:"flex",
        position: "fixed",
        top:"40vh",
        left:"65vw"
    }
}
