import React, {Component} from 'react';
import './form.css';
class FORM extends Component {
    constructor(props) {
        super(props)


    }




    render() {

        return (
            <div className="mainForm">
                <div className="mainForm-from">
                    <div className="mainForm-city input">
                    From:
                        <input 
                            type="text"
                            onChange={this.props.handleInputChange}
                            name="fromInput"
                        />
                    </div>
                    <div className="mainForm-date input">
                    Departure Date:
                        <input 
                            type="date" 
                            onChange={this.props.handleInputChange}
                            name="depDate"
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
                        />
                    </div>
                    <div className="mainForm-date input">
                        Return Date:
                        <input 
                            type="date" 
                            onChange={this.props.handleInputChange}
                            name="retDate"                        
                        />
                    </div>
                </div>
                <div 
                    className="mainForm-button"
                    onClick={this.props.handleMotherFuckinSearch}
                >
                    Search Motherfucker!
                </div>
            </div>
        )
    }
}

export default FORM;