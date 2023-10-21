import "./Location.css"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

const Location = () => {    
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
            <div className="map-container">
                <iframe
                    className="map-responsive"
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.969303991849!2d-77.59769292305246!3d43.147173871130576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b5135caa947f%3A0x2f7585b4012e1124!2sSavior%20Tattoo!5e0!3m2!1sen!2sus!4v1697911224070!5m2!1sen!2sus'
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}                        
                    allowFullscreen=''                           
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'  
                    ></iframe>
            </div>
        </div>
    )
}

export default Location