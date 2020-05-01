import React, { Component } from 'react';
import Popup from './Popup';
import Notes from './Notes'

// Bind button on click to create a popup div with form elements and a save button
// Wire save button to close popup and update firebase

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
            <button onClick={this.togglePopup.bind(this)}>Create New Note</button>
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