import React, { CSSProperties } from 'react';

type MarkerProps = {
    lat: number;
    lng: number;
    text: string;
    username: string;
    markerType: 'currentType' | 'noteType';

}

const Marker: React.FC<MarkerProps> = ({ text, username, markerType }) => {
    const circleStyleCurrent: CSSProperties = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        opacity: 0.55
    };

    const noteStyle: CSSProperties = {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        background: "white",
        borderRadius: "50%",
        padding: "5px",
        color: "black",
        fontWeight: "bold"
    };

    return (<>
        <div>
            {markerType === 'currentType' ? (
                <div style={circleStyleCurrent}>
                </div>
            ) : (
                <div
                    style={noteStyle}
                    title={`Username: ${username}\nNote: ${text}`}>
                    {text}
                </div>
            )}
        </div>
    </>);
}

export default Marker;