import React from 'react';
import firebase from './firebase';

class Popup extends React.Component {  
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            userNote:'',
            userAuthor: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBody = (event) => {
        this.setState({
            userNote: event.target.value,
        })
    }

    handleAuthor = (event) =>  {
        this.setState({
            userAuthor: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const dbRef = firebase.database().ref()
        const completeNote = {
            userNote: this.state.userNote,
            userAuthor: this.state.userAuthor
        }
        dbRef.push(completeNote)
    }

    render() {  
        return (  
            <div className='popup'>  
                <div className='popup\_inner'>  
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={this.state.value} onChange={this.handleBody} name="noteBody" required="required" rows="5" cols="10" minLength="3" maxLength="280"></textarea>
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