import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapContainer = () => {
    const mapStyles = {
      height: "400px",
      width: "100%"
    };
  
    const defaultCenter = {
      lat: 37.7749,
      lng: -122.4194
    };
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyD9IDMz4qagsUoLnf08yNpESRp5KqZlLkI">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
    );
  }
  
  export default MapContainer;