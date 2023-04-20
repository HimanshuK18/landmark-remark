/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NoteAddComponent, { Note } from './Note';
import { NotesContext, Action } from '../state/noteState';

const notesSaved: Note[] = [
    { id: 1, lat: 37.7749, lng: -122.4194, note: 'Note 1', username: 'User 1' },
    { id: 2, lat: 34.0522, lng: -118.2437, note: 'Note 2', username: 'User 2' }
]
jest.mock('../state/noteState', () => ({
    NotesContext: {
        notesSaved: notesSaved
    },
    Action: jest.fn()
}));

describe('NoteAddComponent', () => {
    const mockProps = {
        lat: 0,
        lng: 0,
        Opened: true,
        close: jest.fn()
    };

    const mockNoteData: Note = {
        lat: 0,
        lng: 0,
        note: '',
        username: ''
    };

    it('renders without error', () => {
        const { getByText, getByTestId } = render(<NoteAddComponent {...mockProps} />);
        expect(getByText('Add Note')).toBeInTheDocument();
        expect(getByTestId('note-input')).toBeInTheDocument();
        expect(getByTestId('username-input')).toBeInTheDocument();
        expect(getByTestId('Button-Save')).toBeInTheDocument();
    });

    it('sets note data on input change', () => {
        const { getByTestId } = render(<NoteAddComponent {...mockProps} />);
        const noteInput = getByTestId('note-input');
        const usernameInput = getByTestId('username-input');
        fireEvent.change(noteInput, { target: { value: 'Test note' } });
        fireEvent.change(usernameInput, { target: { value: 'Test user' } });
        expect(noteInput).toHaveValue('Test note');
        expect(usernameInput).toHaveValue('Test user');
    });

    it('calls close function on Save button click', () => {
        const { getByTestId } = render(<NoteAddComponent {...mockProps} />);
        const saveButton = getByTestId('Button-Save');
        fireEvent.click(saveButton);
        expect(mockProps.close).toHaveBeenCalled();
    });

    it('calls dispatch with correct payload on Save button click', () => {
        const mockDispatch = jest.fn();
        jest.spyOn(React, 'useContext').mockReturnValue({ dispatch: mockDispatch });
        const { getByTestId } = render(<NoteAddComponent {...mockProps} />);
        const saveButton = getByTestId('Button-Save');
        fireEvent.click(saveButton);
        const expectedDispatchObject: Action = {
            type: 'save',
            payload: mockNoteData
        };
        expectedDispatchObject.payload.lat = mockProps.lat;
        expectedDispatchObject.payload.lng = mockProps.lng;
        expect(mockDispatch).toHaveBeenCalledWith(expectedDispatchObject);
    });

    it('calls close function on Dialog close', () => {
        const { getByRole } = render(<NoteAddComponent {...mockProps} />);
        const dialog = getByRole('dialog');
        fireEvent.click(dialog);
        expect(mockProps.close).toHaveBeenCalled();
    });
});
