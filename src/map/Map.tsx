import React, { useState } from 'react';
import GoogleMapReact from "google-map-react";
import { Note } from '../notes/Note';
import NoteAddComponent from '../notes/Note';
import Marker from '../Marker/Marker';



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
    const handleMapClick = (e: any) => {
        const lat = e.lat;
        const lng = e.lng;
        setOpen(true);
        //onSaveNote("newNote");
    };

    const [open, setOpen] = useState(false);

    return (
        <div style={{ height: "500px", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCgV456R6PGFuq28XFrbCnzU0r7vR54ANU" }}
                defaultCenter={currentLocation}
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
                        text={note.text}
                        username={note.username}
                        markerType={"noteType"}
                    />
                ))}

            </GoogleMapReact>
            <NoteAddComponent></NoteAddComponent>
        </div>
    );
};



export default MapComponent;