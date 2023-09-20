import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Contact from "./components/Contact/Contact"
import Location from "./components/Location/Location"
import Portfolio from './components/Portfolio/Portfolio'

function App() {

  return (
    <div className="container mx-auto">
      <Navbar />
      <Slider />
      <Location />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
