import React, { useContext, useState } from "react";
import { NotesContext, Action } from '../state/noteState';
import './note.css';


type Note = {
  id?: number;
  lat: number;
  lng: number;
  note: string;
  username: string;
}
type NoteProps = {
  lat: number,
  lng: number
}

const NoteAddComponent: React.FC<NoteProps> = (props: NoteProps) => {
  let formData: Note = {
    "lat": 0,
    "lng": 0,
    "note": "",
    "username": ""
  };
  const { dispatch } = useContext(NotesContext);
  let [noteData, setNoteDate] = useState(formData);

  const handleNoteData = (e: any) => {
    e.preventDefault();
    const dispatchObject: Action = {
      type: 'save',
      payload: noteData
    }
    setNoteDate(formData);
    dispatchObject.payload.lat = props.lat;
    dispatchObject.payload.lng = props.lng;
    dispatch(dispatchObject);
  };

  const setData = (name: string, value: string) => {
    setNoteDate({ ...noteData, [name]: value });
    console.log();
  }

  return (<>
    <div className="add-note-container">
      <h3 className="add-note-title">Add Note</h3>
      <div className="form-container">
        <div className="form-row">
          <label htmlFor="note" className="form-label">Add Note: </label>
          <input data-testid="note-input" type="text" required id="note" pattern="[A-Za-z]"
            onChange={(event) => setData('note', event.target.value)} title="Please enter text value" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="username" className="form-label">User Name: </label>
          <input data-testid="username-input" type="text" required id="username" pattern="[A-Za-z]"
            onChange={(event) => setData('username', event.target.value)} title="Please enter text value" className="form-input" />
        </div>
      </div>
      <button data-testid="Button-Save" className="save-button" onClick={handleNoteData}>Save</button>
    </div>
  </>);
};

export default NoteAddComponent;
export type { Note };
