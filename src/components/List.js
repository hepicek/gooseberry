import React, { Component } from 'react';
import Flight from './flight/Flight';
import axios from "axios/index";


class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            flights: [],
        }
    }


    componentDidMount() {
        axios.get('https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=18%2F07%2F2018&dateTo=25%2F07%2F2018&limit=5')
            .then((res) => {
                this.setState({flights: res.data.data});
            });
    }

    render() {
        const {flights} = this.state;
        return (
            <div>
                {flights.map((flight, index) => {
                    return (
                        <Flight key={index} flight={flight}/>
                    )
                })}
            </div>
        );
    }
}

export default List;