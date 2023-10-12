import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container' id="top">
            <a href="#"><p className="headline">L.M.</p></a>
            <nav>
                <ul className="navbar">
                    <a href="#home"><li>Home</li></a>
                    <a href="#location"><li>Location</li></a>
                    <a href="#portfolio"><li>Portfolio</li></a>
                    <a href="#aftercare"><li>Aftercare</li></a >
                    <a href="#contact"><li>Booking</li></a >
                </ul>
            </nav>
        </div>
    )   
}

export default Navbar