/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { NotesContext } from './state/noteState';
import { Note } from './notes/Note';

afterEach(cleanup);

describe('App Component', () => {
  it('renders Map Component', () => {
    const notesSaved: Note[] = [];
    
    const { getByTestId } = render(
      <NotesContext.Provider value={{ notesSaved, dispatch: () =>  jest.fn()}}>
        <App />
      </NotesContext.Provider>
    );
    expect(getByTestId('map-component')).toBeInTheDocument();
  });

  it('fetches current location on mount', () => {
    const mockPosition = {
      coords: {
        latitude: 40.7128,
        longitude: 74.0060,
      },
    };
    const mockGetCurrentPosition = jest.fn(
      (success, error) => success(mockPosition)
    );
    const mockNavigator = {
      geolocation: {
        getCurrentPosition: mockGetCurrentPosition,
      },
    };
    
    global.navigator = mockNavigator;
    const { unmount } = render(<App />);
    expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalledTimes(1);
    unmount();
  });
});
