import './Header.css'

const Header = () => {
    return (
        <div id="location">
            <h1 className="title">LEE MILES</h1>
            <div className="line-break"></div>
            <div className="header-info">
                <p>SAVIOR TATTOO</p>
                <p className="vertical-line">|</p>
                <p>+1-585-484-9771</p>
                <p className="vertical-line">|</p>
                <p>lee@leemilestattoo.com</p>
            </div>
            <div className="btn-container">
                 <a href="#contact">
                    <button>BOOK APPOINTMENT</button>
                </a>
            </div>
        </div>
    )   
}

export default Header