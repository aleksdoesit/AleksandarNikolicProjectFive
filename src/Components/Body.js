import React, { Component } from 'react'
import CreateNote from './CreateNote'
import firebase from './firebase';
import Notes from './Notes'


class Body extends Component {

    // Construct an empty array to push our firebase data into
    constructor(){
        super()
        this.state = {
            notes: []
        }
    }

    // Pull our database data and push the values into the notes array
    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (result) => {
        const data = result.val();
        const noteArray = []
        for (let key in data){
            noteArray.push({ noteBody: data[key], noteId: key })
            }
            this.setState({
                    notes: noteArray
                })
            })
        }

    // Pass in our new array as a prop for our Notes component
    render(){
        return (
            <main className="wrapper">
                <CreateNote />
                <Notes notesArray={this.state.notes}/>
            </main>
        )
    }
}

export default Body;