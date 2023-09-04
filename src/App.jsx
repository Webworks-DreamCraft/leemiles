import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </>
  )
}

export default App
