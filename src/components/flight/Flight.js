import React, {Component} from 'react';
import './Flight.css';


class Flight extends Component {


    render() {
        const {flight} = this.props;

        return (
            <div className="flightInfo">
                <div className="price">
                    <p>{flight.price}</p>
                </div>
                <div className="detailsContainer">
                    <div className="departure">
                        <div className="dTime">
                            <p>Departure time: {flight.departure.dTime}</p>
                            <p>Arrival time: {flight.departure.aTime}</p>
                        </div>
                        <div className="date">
                            <p>Date: {flight.departure.dDate}</p>
                        </div>
                        <div className="toDuration">
                            <p>Duration: {flight.toDuration}</p>
                        </div>
                    </div>
                    <div className="arrival">
                        <div className="aTime">
                            <p>Departure time: {flight.return.aTime}</p>
                            <p>Arrival time: {flight.return.aTime}</p>
                        </div>
                        <div className="returnDate">
                            <p>Date: {flight.return.aDate}</p>
                        </div>
                        <div className="returnDuration">
                            <p>Duration: {flight.returnDuration}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flight;