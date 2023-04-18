import React, { useEffect, useState } from 'react';
import MapComponent from './map/Map';
import { NoteContextProvider } from './state/noteState';


const App: React.FC = () => {
  let [currentLocation, setCurrentLocation] = useState({
    lat: -37.8136,
    lng: 144.96
  });
const notesD =[{
  id :1,
  lat: -37.94,
  lng: 144.72,
  text: "Rani",
  username: "stringnn"
},{
  id :2,
  lat: -37.8,
  lng: 144.7,
  text: "Himanshu",
  username: "stsssringnn"
}];
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
    <div className="App">
      <NoteContextProvider>
        <MapComponent notes={notesD} currentLocation={currentLocation} onSaveNote={() => { return }}></MapComponent>
      </NoteContextProvider></div>
  </>);
}

export default App;
