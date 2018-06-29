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
        const dTime_time = dTime.getHours() + ":" + dTime.getMinutes();
        const dTime_date = `${dTime.getDate()}.${dTime.getMonth()}.${dTime.getFullYear()}`
        const aTime_time = aTime.getHours() + ":" + aTime.getMinutes();
        const aTime_date = `${aTime.getDate()}.${aTime.getMonth()}.${aTime.getFullYear()}`
        const airlines = flight.airlines.map(airline => {
            return <p key={airline}>{airline}</p>;
        })
        return (
            <div className="flightInfo">
                <div className="price">
                    <p>{price}</p>
                </div>
                <div className="detailsContainer">
                    <div className="departure">
                        <div className="airline">{airlines}</div>
                        <p>Departure time: {dTime_time}</p>
                        <p>{dTime_date}</p>
                        <p>{flight.fly_duration}</p>
                    </div>
                    <div className="arrival">
                        <div  className="airline">{airlines}</div>
                        <p>Arrival time: {aTime_time}</p>
                        <p>{aTime_date}</p>
                        <p>{flight.fly_duration}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flight;