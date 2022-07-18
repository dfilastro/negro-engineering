import React from 'react';
import GoogleMapReact from 'google-map-react';

interface GoogleMapsProps {
  latitude: string;
  longitude: string;
}

const GoogleMaps = ({ latitude, longitude }: GoogleMapsProps) => {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: latitude, lng: longitude },
      map,
      title: 'Negro Engenharia',
    });
    return marker;
  };

  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDaf8Z0krhGoC91Qg22dNczi_fMxN8YBNw' }}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
