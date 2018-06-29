import React, {Component} from 'react';
import './form.css';
class FORM extends Component {
    constructor(props) {
        super(props)


    }




    render() {

        return (
            <div className="mainForm">
            <div className="inputFields" style={{display: "flex"}}>
                    <div className="mainForm-from">
                        <div className="mainForm-city input">
                        From:
                            <input 
                                type="text"
                                onChange={this.props.handleInputChange}
                                name="fromInput"
                                value={this.props.fromInput}
                            />
                        </div>
                        <div className="mainForm-date input">
                        Departure Date:
                            <input 
                                type="date" 
                                onChange={this.props.handleInputChange}
                                name="depDate"
                                value={this.props.depDate}
                            />
                        </div>
                    </div>
                    <div className="mainForm-to">
                        <div className="mainForm-city input">
                        To:
                            <input 
                                type="text" 
                                onChange={this.props.handleInputChange}
                                name="toInput"
                                value={this.props.toInput}
                            />
                        </div>
                        <div className="mainForm-date input">
                            Return Date:
                            <input 
                                type="date" 
                                onChange={this.props.handleInputChange}
                                name="retDate"  
                                value={this.props.retDate}              
                            />
                        </div>
                    </div>
                </div>
                <div className="check">
                    <input onChange={this.props.handleCheckboxChange} type="checkbox" name="checkbox"/> Only Direct Flights
                </div>
                <div 
                    className="mainForm-button"
                    onClick={this.props.handleMotherFuckinSearch}
                >
                    Search!
                </div>
            </div>
        )
    }
}

export default FORM;