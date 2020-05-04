import React from 'react';
import firebase from './firebase';

// Where most of the magic happens
// Creating an array that stores three values the user inputs: Title, Body, Author
class Popup extends React.Component {  
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            userTitle: '',
            userNote:'',
            userAuthor: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBody = (event) => {
        this.setState({
            userNote: event.target.value
        })
    }

    handleAuthor = (event) =>  {
        this.setState({
            userAuthor: event.target.value
        })
    }

    handleTitle = (event) =>  {
        this.setState({
            userTitle: event.target.value
        })
    }

    // On submit change the value using state of the different data fields in the array
    handleSubmit(event) {
        event.preventDefault();
        const dbRef = firebase.database().ref()
        const completeNote = {
            userTitle: this.state.userTitle,
            userNote: this.state.userNote,
            userAuthor: this.state.userAuthor
        }
        dbRef.push(completeNote)
    }

    // Form displayed to the DOM after our create note button is pushed
    render() {  
        return (  
            <div className='popup'>  
                <div className='popup\_inner popupInner'>  
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleTitle} type="text" name="noteTitle" required="required" placeholder="Please enter a title for your note"/>
                        <textarea value={this.state.value} onChange={this.handleBody} name="noteBody" required="required" rows="10" cols="30" minLength="3" maxLength="280"></textarea>
                        <input onChange={this.handleAuthor} type="text" name="noteAuthor" required="required" placeholder="Please enter a your name"/>
                    <button value="Submit">Post</button>
                    <button onClick={this.props.closePopup}>Cancel</button>  
                    </form>
                </div>  
            </div>  
        );  
    }  
}  

export default Popup;