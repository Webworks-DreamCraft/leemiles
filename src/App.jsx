import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Contact from "./components/Contact/Contact";
import Location from "./components/Location/Location";
import Aftercare from "./components/Aftercare/Aftercare";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Slider />
      <Location />
      <Aftercare />
      <Contact />
    </div>
  );
}

export default App;
