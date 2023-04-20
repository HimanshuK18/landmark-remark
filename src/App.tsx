import React, { useEffect, useState, useContext } from 'react';
import MapComponent from './map/Map';
import { NotesContext } from './state/noteState';


const App: React.FC = () => {
  let [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0
  });

  const { notesSaved } = useContext(NotesContext);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(prevState => ({
            ...prevState,
            lat: latitude,
            lng: longitude,
          }));
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  return (<>
    <title>Landmark Remark</title>
    <div style={{ height: "100%", width: "100%" }}>
      <MapComponent notes={notesSaved} currentLocation={currentLocation} onSaveNote={() => { return }}></MapComponent>
    </div>
  </>);
}

export default App;