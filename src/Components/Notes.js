import React from 'react'

function Notes(props) {
    console.log(props);
    return(
        <ul>
            {props.notesArray.map((notes) => {
                return (
                    <li><p>{notes.noteBody.userNote}</p><p>{notes.noteBody.userAuthor}</p></li>
                )
            })  }
        </ul>
    )
}

export default Notes