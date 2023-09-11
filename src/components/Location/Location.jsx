import "./Location.css"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

const Location = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    });

    if(!isLoaded) return <div><h1>Loading...</h1></div>
    return <Map />
}

function Map() {
    return (
        <div id="location">
            <h1 className="title">LOCATION</h1>
            <div className="line-break"></div>
            <div className="location-info">
                <p>SAVIOR TATTOO</p>
                <p className="vertical-line">|</p>
                <p>439 MONROE AVE ROCHESTER, NY</p>
                <p className="vertical-line">|</p>
                <p>+1-585-484-9771</p>
            </div>
            <GoogleMap
                zoom={16} 
                center={{ lat: 43.147299698314114, lng: -77.59530238916275 }}
                mapContainerClassName="map-container"
            >
                <MarkerF position={{ lat: 43.147299698314114, lng: -77.59530238916275 }}/>
            </GoogleMap>
        </div>
    )
}

export default Location