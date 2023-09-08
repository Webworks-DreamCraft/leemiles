import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container' id="top">
            <a href="#"><p className="headline">L.M.</p></a>
            <nav>
                <ul className="navbar">
                    <a href="#"><li>Home</li></a>
                    <a href="#2"><li>Location</li></a>
                    <a href="#3"><li>Portfolio</li></a>
                    <a href="#4"><li>Booking</li></a >
                    <a href="#5"><li>Aftercare</li></a >
                </ul>
            </nav>
        </div>
    )   
}

export default Navbar