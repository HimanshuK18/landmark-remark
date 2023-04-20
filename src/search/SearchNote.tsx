import React, { useState, useContext, useEffect } from "react";
import { NotesContext } from '../state/noteState';
import './search.css';


const SearchComponent: React.FC = () => {
  const { notesSaved } = useContext(NotesContext);
  const [filteredNotes, setFilterNote] = useState(notesSaved);
  const [inputNote, setNoteText] = useState('');
  const [inputUserName, setUserNameText] = useState('');

  useEffect(() => {
    setFilterNote(notesSaved);
  }, [notesSaved]);


  const handleNoteChange = (e: any) => {
    setNoteText(e.target.value);
    if (e.target.value !== '') {
      const filterData = filteredNotes.filter(note => {
        const itemName = note.note.toLowerCase();
        const userInputLower = e.target.value.toLowerCase();
        return itemName.includes(userInputLower);
      });
      setFilterNote(filterData);
    }
    else {
      setFilterNote(notesSaved);
    }
  };

  const handleUserNameChange = (e: any) => {
    setUserNameText(e.target.value);
    if (e.target.value !== '') {
      const filterData = filteredNotes.filter(note => {
        const itemName = note.username.toLowerCase();
        const userInputLower = e.target.value.toLowerCase();
        return itemName.includes(userInputLower);
      });
      setFilterNote(filterData);
    }
    else {
      setFilterNote(notesSaved);
    }
  };


  return (<>
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Note</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={inputNote}
                onChange={handleNoteChange}
                placeholder="Enter Note"
              />
            </td>
            <td>
              <input
                type="text"
                value={inputUserName}
                onChange={handleUserNameChange}
                placeholder="Enter Note"
              />
            </td>
          </tr>
          {filteredNotes.map(item => (
            <tr key={item.id}>
              <td>{item.note}</td>
              <td>{item.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>);
};

export default SearchComponent;
