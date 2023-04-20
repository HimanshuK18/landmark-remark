import React from 'react';
import GoogleMapReact from "google-map-react";
import { Note } from '../notes/Note';
import NoteAddComponent from '../notes/Note';
import Marker from '../Marker/Marker';
import SearchComponent from '../search/SearchNote';
import './Map.css';



interface MapComponentProps {
    notes: Note[];
    currentLocation: { lat: number; lng: number };
    onSaveNote: (note: Note) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({
    notes,
    currentLocation,
    onSaveNote,
}) => {
    return (
        <div className='container'>
            <div style={{ height: "100vh", width: "75%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCgV456R6PGFuq28XFrbCnzU0r7vR54ANU" }}
                    center={currentLocation}
                    defaultZoom={11}
                >
                    <Marker
                        key={3}
                        lat={currentLocation.lat}
                        lng={currentLocation.lng}
                        text={"Anahita"}
                        username={"Some Nate"}
                        markerType={"currentType"}
                    />

                    {notes.map((note) => (
                        <Marker
                            key={note.id}
                            lat={note.lat}
                            lng={note.lng}
                            text={note.note}
                            username={note.username}
                            markerType={"noteType"}
                        />
                    ))}

                </GoogleMapReact></div>
            <div style={{ height: "100vh", width: "25%" }}>
                <SearchComponent ></SearchComponent>
                <NoteAddComponent lat={currentLocation.lat} lng={currentLocation.lng}></NoteAddComponent>
            </div>

        </div>
    );
};

export default MapComponent;