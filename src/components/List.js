import React, { Component } from 'react';
import Flight from './flight/Flight';



class List extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {flights} = this.props;
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