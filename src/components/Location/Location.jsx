import "./Location.css";

const Location = () => {
  return (
    <div id="location">
      <h1 className="title transparent">LOCATION</h1>
      <div className="line-break"></div>
      <div className="location-info">
        <p>LIKE YOU I WAS</p>
        <p className="vertical-line">|</p>
        <p>116 MAIN ST GENESEO, NY 14454</p>
        <p className="vertical-line">|</p>
        <p>1-585-245-8536</p>
      </div>
      <div className="map-container">
        <iframe
          className="map-responsive"
          src="https://maps.google.com/maps?q=116+Main+St,+Geneseo,+NY+14454&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
