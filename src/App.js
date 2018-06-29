import React, { Component } from 'react';
import axios from "axios/index";
import List from './components/List';
import FORM from './components/flight/form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fromInput: "",
      toInput: "",
      depDate: undefined,
      retDate: undefined,
      flights: [],
      formattedFlights: [],
  }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMotherFuckinSearch = this.handleMotherFuckinSearch.bind(this);
    this.formatFlightData = this.formatFlightData.bind(this);
  }
  formatFlightData(flight) {
    let to_dTime = new Date(flight.dTime * 1000);
    let to_dTime_minutes = to_dTime.getMinutes() < 10 ? '0' + to_dTime.getMinutes() : to_dTime.getMinutes();
    let to_dTime_time = to_dTime.getHours() + ":" + to_dTime_minutes;
    let to_dTime_date = `${to_dTime.getDate()}.${to_dTime.getMonth()}.${to_dTime.getFullYear()}`;
    let to_aTime = new Date(flight.aTime * 1000);
    let to_aTime_minutes = to_aTime.getMinutes() < 10 ? '0' + to_aTime.getMinutes() : to_aTime.getMinutes();
    let to_aTime_time = to_aTime.getHours() + ":" + to_aTime_minutes;
    let to_aTime_date = `${to_aTime.getDate()}.${to_aTime.getMonth()}.${to_aTime.getFullYear()}`;
    let ret_dTime;
    let ret_aTime = new Date(flight.route[flight.route.length -1].aTime * 1000);
    for(let i = 0; i < flight.route.length; i++) {
      if(flight.route[i].return = 1) {
        ret_dTime = new Date(flight.route[i].dTime * 1000);
        break;
      } 
    }
    let ret_dTime_minutes = ret_dTime.getMinutes() < 10 ? '0' + ret_dTime.getMinutes() : ret_dTime.getMinutes();
    let ret_dTime_time = ret_dTime.getHours() + ":" + ret_dTime_minutes;
    let ret_dTime_date = `${ret_dTime.getDate()}.${ret_dTime.getMonth()}.${ret_dTime.getFullYear()}`;
    let ret_aTime_minutes = ret_aTime.getMinutes() < 10 ? '0' + ret_aTime.getMinutes() : ret_aTime.getMinutes();
    let ret_aTime_time = ret_aTime.getHours() + ":" + ret_aTime_minutes;
    let ret_aTime_date = `${ret_aTime.getDate()}.${ret_aTime.getMonth()}.${ret_aTime.getFullYear()}`;

    let flight_Obj = {
      departure: {},
      return: {},
    };
    flight_Obj.departure.codes = flight.routes[0];
    flight_Obj.return.codes = flight.routes[1];
    flight_Obj.cityFrom = flight.cityFrom;
    flight_Obj.cityTo = flight.cityTo;
    flight_Obj.toDuration = flight.fly_duration;
    flight_Obj.returnDuration = flight.return_duration;
    flight_Obj.departure.dTime = to_dTime_time;
    flight_Obj.departure.dDate = to_dTime_date;
    flight_Obj.departure.aTime = to_aTime_time;
    flight_Obj.departure.aDate = to_aTime_date;
    flight_Obj.return.dTime = ret_dTime_time;
    flight_Obj.return.dDate = ret_dTime_date;
    flight_Obj.return.aTime = ret_aTime_time;
    flight_Obj.return.aDate = ret_aTime_date;
    flight_Obj.price =  new Intl.NumberFormat("cs", {
      style: 'currency',
      currency: 'CZK'
    }).format(flight.conversion.EUR * 25);
    console.log(flight_Obj);
    this.setState((prevState) => {
      return {
        formattedFlights: [...prevState.formattedFlights, flight_Obj]
      }
    })
  }
  handleMotherFuckinSearch() {
    console.log("clicked")
    let {fromInput, toInput, depDate, retDate} = this.state;
    if(!fromInput || !toInput || !depDate || !retDate) {
      return 
    } else {
      depDate = depDate.split("-");
      depDate = depDate[2] + "/" + depDate[1] + "/" + depDate[0];
      retDate = retDate.split("-");
      retDate = retDate[2] + "/" + retDate[1] + "/" + retDate[0];

      let url = `https://api.skypicker.com/flights?flyFrom=${fromInput.toUpperCase()}&to=${toInput.toUpperCase()}&dateFrom=${depDate}&dateTo=${depDate}&returnFrom=${retDate}&returnTo=${retDate}&limit=5`;

      axios.get(url)
      .then((res) => {
          // console.log(res.data.data); 
          this.setState({flights: res.data.data});
      })
      .then(() => {
          // console.log(this.state.flights);
          this.state.flights.forEach(flight => {
            this.formatFlightData(flight);
          })
  
      })

    }
  }
  handleInputChange(e) {
    let input = e.target.name;
    let value = e.target.value;
    this.setState(() => ({
        [input]: value
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">I'm actually just a Chinese GooseBerry</h1>
        </header>
          <FORM 
            handleMotherFuckinSearch={this.handleMotherFuckinSearch}
            handleInputChange={this.handleInputChange}
          />
          <List 
            flights={this.state.formattedFlights}
          />
      </div>
    );
  }
}

export default App;
