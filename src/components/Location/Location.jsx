import "./Location.css"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

const Location = () => {

    const { isLoaded, loadError } = useLoadScript({
        // eslint-disable-next-line no-undef
        googleMapsApiKey: process.env.VITE_GOOGLE_API_KEY,
    });
    
    const googleMap = () => (
        <GoogleMap
            zoom={16} 
            center={{ lat: 43.147299698314114, lng: -77.59530238916275 }}
            mapContainerClassName="map-container"
        >
            <MarkerF position={{ lat: 43.147299698314114, lng: -77.59530238916275 }}/>
        </GoogleMap>
    )

    const hasError = loadError ? null : googleMap();
    
    return (
        <div id="location">
            <h1 className="title transparent">LOCATION</h1>
            <div className="line-break"></div>
            <div className="location-info">
                <p>SAVIOR TATTOO</p>
                <p className="vertical-line">|</p>
                <p>439 MONROE AVE ROCHESTER, NY</p>
                <p className="vertical-line">|</p>
                <p>1-585-484-9771</p>
            </div>
            {!isLoaded ? "...loading" : hasError}
        </div>
    )
}

export default Location