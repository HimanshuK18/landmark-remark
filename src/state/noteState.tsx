import React, { createContext, Dispatch, useReducer } from 'react';
import { Note } from '../notes/Note';

type Action =
    | { type: 'save'; payload: Note }
    | { type: 'search'; payload: string };

type ContextNotes = {
    notes: Note[];
    dispatch: Dispatch<Action>;
};

const userNotes: Note[] = [];

const reducer = (state: Note[], action: Action): Note[] => {
    switch (action.type) {
      case 'save':
        return [...state, action.payload];
      case 'search':
        return state.filter(note =>
          note.text.toLowerCase().includes(action.payload.toLowerCase())
        );
      default:
        throw new Error('Unhandled action type');
    }
  };

export const NotesContext = createContext<ContextNotes>({
    notes: userNotes,
    dispatch: () => { return userNotes },
});


export const NoteContextProvider: React.FC<any> = (props: any) => {
    const [notes, dispatch] = useReducer(reducer, userNotes);
    const handleDispatch = (action: Action) => {
        dispatch(action);
      };
    return (
        <NotesContext.Provider value={{ notes, dispatch: handleDispatch }}>
            {props.children}
        </NotesContext.Provider>
    );
};

