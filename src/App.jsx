import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Contact from "./components/Contact/Contact"
import Location from "./components/Location/Location"
import Header from "./components/Header/Header"
import Aftercare from "./components/Aftercare/Aftercare";


function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Header />
      <Slider />
      <Location />
      <Aftercare />
      <Contact />
    </div>
  );
}

export default App;
