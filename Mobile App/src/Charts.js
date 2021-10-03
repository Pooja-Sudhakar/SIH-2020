import React from 'react';
// import ReactDOM from 'react-dom';
import { Chart } from "react-google-charts";
import './charts.css';

class Charts extends React.Component{

    render(){
      var present = this.props.present
      var total = this.props.total
      console.log(present,total)
        return(
            <div className="fontf">
            <Chart
  width={'100%'}
  height={'100%'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Employee present'],
    ['Present', present],
    ['Absent', total-present],
  ]}
  options={{
    title: 'Daily Attendance',
  }}
  rootProps={{ 'data-testid': '1' }}
  
/>
</div>
        );
    };
    

}
export default Charts;