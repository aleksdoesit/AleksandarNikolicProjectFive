import React, { Component } from 'react'
import CreateNote from './CreateNote'
import firebase from './firebase';
import Notes from './Notes'


class Body extends Component {

    constructor(){
        super()
        this.state = {
            notes: []
        }
    }

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

    render(){
        return (
            <main class="wrapper">
                <CreateNote />
                <Notes notesArray={this.state.notes}/>
            </main>
        )
    }
}

export default Body;