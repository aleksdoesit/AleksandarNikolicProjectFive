import React from 'react'

// Taking our firebase data and appending it to the page in individual notes
function Notes(props) {
    
    return(
        <ul>
            {props.notesArray.map((notes) => {
                return (
                <li>
                    <h3>{notes.noteBody.userTitle}</h3>
                    <p>{notes.noteBody.userNote}</p>
                    <p className="noteAuthor">By: {notes.noteBody.userAuthor}</p>
                </li>
                )
            })}
        </ul>
    )
}

export default Notes