import React, { Component } from 'react';
import Popup from './Popup';

// Creating our create note button and popup box
// setting state of showPopup to false and toggling it onClick
class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div>
            <button className='newNote' onClick={this.togglePopup.bind(this)}>Create New Note</button>
            {this.state.showPopup ?  
            <Popup
                closePopup={this.togglePopup.bind(this)}  
            />  
            : null  
            }
            </div>
        );
    }
}

export default CreateNote;