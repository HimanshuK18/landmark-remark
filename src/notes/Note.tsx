import React, { useState } from "react";


type Note = {
    id?: number;
    lat: number;
    lng: number;
    text: string;
    username: string;
}

const NoteAddComponent: React.FC = () => {
    let formData = {
        "note": "",
        "userName": ""
    };
    let [noteData, setNoteDate] = useState(formData);

    const handleNoteData = () => {
        const dataToSend = noteData;
        setNoteDate(formData);
        console.log(dataToSend);// save to store
    };

    const setData = (name: string, value: string) => {
        setNoteDate({ ...noteData, [name]: value });
        console.log();
    }

    return (
        <div style={{ backgroundColor: 'green' }}>
            <h3>Add Note</h3>
            <div style={{ height: '30px', width: '100%' }}>
                <label htmlFor="note">Add Note: </label>
                <input data-testid="note-input" type="text" required id='note'
                    onChange={(event) => setData('note', event.target.value)} pattern="[A-Za-z]" title="Please enter text value"></input>
                <label htmlFor="note"> User Name: </label>
                <input data-testid="username-input" type="text" required id='username'
                    onChange={(event) => setData('userName', event.target.value)} pattern="[A-Za-z]" title="Please enter text value"></input>
            </div>
            <button data-testid="Button-Save" onClick={handleNoteData}>Save</button>
        </div>
    );
};

export default NoteAddComponent;
export type { Note };
