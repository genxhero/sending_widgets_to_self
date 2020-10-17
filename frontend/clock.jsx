import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  constructor(props) {
    // debugger;
      super(props);
      this.state = {
        time: new Date()
      };
    this.tick = this.tick.bind(this);
  }

  render() {
    // debugger;
    let currentTime = this.parseTime();
    let currentDate = this.parseDate();
    //Fri Sep 28 2018
    return (
      <div className="clock">
        <h1 className="clock-time">I think the time is {currentTime} </h1>
        <h1 className="clock-date">{currentDate}</h1>
      </div>
    );
  }

parseDate() {
  let dayNames=new Array(7);
  dayNames[0]="Sunday";
  dayNames[1]="Monday";
  dayNames[2]="Tuesday";
  dayNames[3]="Wednesday";
  dayNames[4]="Thursday";
  dayNames[5]="Friday";
  dayNames[6]="Saturday";

  let monthNames = new Array(12);
  monthNames[0] = "January";
  monthNames[1] = "February";
  monthNames[2] = "March";
  monthNames[3] = "April";
  monthNames[4] = "May";
  monthNames[5] = "June";
  monthNames[6] = "July";
  monthNames[7] = "August";
  monthNames[8] = "September";
  monthNames[9] = "October";
  monthNames[10] = "November";
  monthNames[11] = "December";

  let dayName = dayNames[this.state.time.getDay()];
  let dayNum = this.state.time.getDate();
  let monthName = monthNames[this.state.time.getMonth()];
  let year = this.state.time.getFullYear();

  return `${dayName} ${monthName} ${dayNum} ${year}`;
}

  parseTime() {
    let date = this.state.time;
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
     if(hours > 12) hours -=12;
    let hrStr = hours < 10 ? `0${hours}` : `${hours}`;
    let minStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let secStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${hrStr}:${minStr}:${secStr}`;
  }


  tick(){
  //  debugger;
    this.setState({time: new Date()});
  }

  componentDidMount (){
  //  debugger;
    setInterval(this.tick, 1000);
  }

}

export default Clock;
