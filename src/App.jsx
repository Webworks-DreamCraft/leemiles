import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'

function App() {

  return (
    <div className="container mx-auto">
      <Navbar />
      <h1 className="title">
        LEE MILES
      </h1>
      <h1 className="title" id="1">
        LEE MILES
      </h1>
      <h1 className="title" id="2">
        LEE MILES
      </h1>
      <h1 className="title" id="3">
        LEE MILES
      </h1>
      <h1 className="title" id="4">
        LEE MILES
      </h1>
      <h1 className="title" id="5">
        LEE MILES
      </h1>
      <h1 className="title">LEE MILES</h1>
      <Slider />
      <h1 className="text-3xl font-bold underline">
        Hello world!!!!!!======this works
      </h1>g
 
      
 
    </div>
  )
}

export default App
import Navbar from './components/Navbar/Navbar'
<<<<<<< HEAD
=======
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
>>>>>>> b459b3a (Added Slider / added some images to assets folder for Slider test)
import Contact from "./components/Contact/Contact"

function App() {

  return (
    <div className="container mx-auto">
      <Navbar />
<<<<<<< HEAD
      <h1 className="title">
        LEE MILES
      </h1>
      <h1 className="title transparent" id="1">
        LEE MILES
      </h1>
      <h1 className="title transparent" id="2">
        LEE MILES
      </h1>
      <h1 className="title transparent" id="3">
        LEE MILES
      </h1>
      <h1 className="title transparent" id="4">
        LEE MILES
      </h1>
      <h1 className="title transparent" id="5">
        LEE MILES
      </h1>
      <h1 className="title transparent">LEE MILES</h1>
=======
      <Header />
      <Slider />
      <h1 className="text-3xl font-bold underline">
        Hello world!!!!!!======this works
      </h1>g
 
      <img src={reactLogo} className="logo react" alt="React logo" />
      <img src={viteLogo} className="logo" alt="Vite logo" />
 
>>>>>>> b459b3a (Added Slider / added some images to assets folder for Slider test)
      <Contact />
    </div>
  )
}

export default App
