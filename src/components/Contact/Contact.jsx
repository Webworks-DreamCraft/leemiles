import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container' id="contact">
            <h1 className='title transparent'>BOOKING</h1>
            <div className='line-break'></div>
            <div className='contact-info'>
                <p className='contact-p'>
                    If you'd like to get in touch regarding an art commission or to book a 
                    tattoo appointment please email me using the email address below, and 
                    I'll get back to you as soon as I can. Your patience is appreciated at 
                    busy times.
                </p>

                <p className='email-text'>
                    <a href="mailto:lee@leemilestattoo.com">LEE@LEEMILESTATTOO.COM</a>
                </p>
                
                <div className='arrow-container'>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                            <circle cx="44.9999" cy="45.0001" r="29.7" transform="rotate(-90 44.9999 45.0001)" stroke="white" stroke-width="1.8" />
                            <path d="M31.5 53.1001C41.58 41.5801 44.7 38.1001 45 37.8001L59.4 53.1001" stroke="white" stroke-width="1.8" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact