import React, {Component} from 'react';
import './Flight.css';


class Flight extends Component {


    render() {
        const {flight} = this.props;
        const dTime = new Date(flight.dTime * 1000);
        const aTime = new Date(flight.aTime * 1000);
        const price = new Intl.NumberFormat("cs", {
            style: 'currency',
            currency: 'CZK'
        }).format(flight.conversion.EUR * 25);
        const utcOffset = aTime.getTimezoneOffset();
        aTime.setMinutes(aTime.getMinutes() + utcOffset);
        dTime.setMinutes(dTime.getMinutes() + utcOffset);

        return (
            <div className="flightInfo">
                <div className="price">
                    <p>{price}</p>
                </div>
                <div>
                    <div className="departure">
                        <p>{flight.airline}</p>
                        <p>Departure time: {dTime.toUTCString()}</p>
                        <p>{flight.fly_duration}</p>
                    </div>
                    <div className="arrival">
                        <p>{flight.airline}</p>
                        <p>Arrival time: {aTime.toUTCString()}</p>
                        <p>{flight.fly_duration}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flight;