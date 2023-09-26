import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Contact from "./components/Contact/Contact"
import Location from "./components/Location/Location"
import Portfolio from './components/Portfolio/Portfolio'
import Header from "./components/Header/Header"

function App() {

  return (
    <div className="container mx-auto">
      <Navbar />
      <Header />
      <Slider />
      <Location />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
