import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import './styles.css';

const Map = () => {
  const center = {
    lat: 0, // Latitude du centre de la carte
    lng: 0, // Longitude du centre de la carte
  };

  useEffect(() => {
    // Code pour récupérer la latitude et la longitude du centre de la carte
   
  }, []);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzasyBOZm1ijU8FGSsNc_ztvpP8gmn1t9TP_60' }} 
        defaultCenter={center}
        defaultZoom={10}
      >
        {/* Marqueur ou autres composants Google Maps */}
      </GoogleMapReact>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Ma Landing Page avec Google Maps</h1>
      <Map />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
