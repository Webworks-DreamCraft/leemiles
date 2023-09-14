import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Contact from "./components/Contact/Contact"
import Location from "./components/Location/Location"

function App() {

  return (
    <div className="container mx-auto">
      <Navbar />
      <Slider />
      <Location />
      <Contact />
    </div>
  )
}

export default App
