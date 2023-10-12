import "./Aftercare.css";

const Aftercare = () => {
  return (
    <div className="aftercare--container" id="aftercare">
      <h1 className="title transparent">AFTERCARE</h1>
      <p className="aftercare--bio">
        Leave your bandage on for 12 - 24 hours.
        It needs time to bleed and release plasma.

        Before you start, make sure your hands are clean and you have
        unscented antibacterial soap ready. Avoid soap with fragrance,
        moisture beads or scrubs.
      </p>
      <div className="line-break"></div>
      
      <div className="aftercare--card-title">
        <div>Taking off the Bandage and Cleaning Your Tattoo</div>
      </div>
      <div className="aftercare--card">
        <div className="aftercare--num">
          <p>1</p>
        </div>
        <div className="aftercare--info">
          <p className="aftercare--title">REMOVE -</p>
          <p className="aftercare--p">
            Carefully remove the bandage and tape. If you feel the bandage
            sticking to the tattoo, wet it with lukewarm water and gently slide it
            off.
          </p>
        </div>
      </div>
      <div className="aftercare--card">
        <div className="aftercare--num">
          <p>2</p>
        </div>
        <div className="aftercare--info">
          <p className="aftercare--title">LATHER -</p>
          <p className="aftercare--p">
            Make a lather in your hands with soap and warm water. NO
            washcloths, bath towels, or sponges on a fresh tattoo.
          </p>
        </div>
      </div>
      <div className="aftercare--card">
        <div className="aftercare--num">
          <p>3</p>
        </div>
        <div className="aftercare--info">
          <p className="aftercare--title">CLEAN -</p>
          <p className="aftercare--p">
            Gently clean the tattoo using a circular motion until all ointment
            and plasma is removed.
          </p>
        </div>
      </div>
      <div className="aftercare--card">
        <div className="aftercare--num">
          <p>4</p>
        </div>
        <div className="aftercare--info">
          <p className="aftercare--title">RINSE -</p>
          <p className="aftercare--p">  
            Rinse the tattoo gently until the skin is clean.
          </p>
        </div>
      </div>
      <div className="aftercare--card">
        <div className="aftercare--num">
          <p>5</p>
        </div>
        <div className="aftercare--info">
          <p className="aftercare--title">DRY -</p>
          <p className="aftercare--p">  
            Pat dry with a clean paper towel then allow to fully air
            dry for 10-20 minutes. DO NOT SCRUB.
          </p>
        </div>
      </div>
      <div className="aftercare--card">
        <div className="aftercare--num">
          <p>6</p>
        </div>
        <div className="aftercare--info">
          <p className="aftercare--title">LOTION -</p>
          <p className="aftercare--p">  
            Once the tattoo is dry, apply a very small amount of unscented
            lotion (no petroleum based products) Gently rub the ointment into
            your tattoo. Dab any excess off with a clean paper towel.
            Applying too much ointment can cause your tattoo to
            "suffocate" Apply only a very thin coat so your tattoo
            can breathe.
            Clean your tattoo this way 2x or 3x per day in the shower or sink
            Until it is healed.
            There is no need to re-bandage the tattoo, but please
            be mindful that your tattoo is a wound and when
            unwrapped, it is prone to dirt and bacteria which may
            cause infection. Avoid direct contact with any surface.
          </p>
        </div>
      </div>

            
      <div className="line-break"></div>
      <div className="aftercare--card-title">
        <div>Important Do's And Don'ts</div>
      </div>
      <div className="aftercare--card">
        <div className="aftercare--num">
          <p>-</p>
        </div>
        <div className="aftercare--info-dos">
          <p className="aftercare--title">Cleaning -</p>
          <p className="aftercare--p">
            Clean towels, bedding and clothes are highly recommended during
            the healing process.
          </p>
        </div>
      </div>
      <div className="aftercare--card">
        <div className="aftercare--num">
          <p>-</p>
        </div>
        <div className="aftercare--info-dos">
          <p className="aftercare--title">Cleaning -</p>
          <p className="aftercare--p">
            Showering is fine. however, please DO NOT soak your tattoo for at
            least 2 weeks This means no swimmina. baths or submerging your
            tattoo in water for long periods of time
          </p>
        </div>
      </div>
      <div className="aftercare--card">
        <div className="aftercare--num">
          <p>-</p>
        </div>
        <div className="aftercare--info-dos">
          <p className="aftercare--title">Sunlight -</p>
          <p className="aftercare--p">
            Avoid direct sunlight on your tattoo until the tattoo is completely healed. After that, we advise putting on a sunblock
            (minimum SPE 50) on your tattoo whenever you find yourself in direct
            sunlight for the rest of your life. The sun will undoubtedly cause
            damage and compromise the longevity of vour tattoo
          </p>
        </div>
      </div>
      <div className="aftercare--card">
        <div className="aftercare--num">
          <p>-</p>
        </div>
        <div className="aftercare--info-dos">
          <p className="aftercare--title">Clothing -</p>
          <p className="aftercare--p">
            Wear loose clothing (preferably cotton) and avoid constricting
            accessories like bra straps and tight waistbands over a fresh tattoo
            Avoid dirty sweaty or itchy clothing as they can create healing issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aftercare;