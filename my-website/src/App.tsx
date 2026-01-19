import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BackgroundGridPattern from './components/Elements/BackgroundGridPattern'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Connect'

function App() {

  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <div className="fixed inset-0 -z-10">
        <BackgroundGridPattern />
      </div>
      <Navbar/>
      <div className="relative z-10 pt-24">
        <Home/>
        <Work/>
        <About/>
        <Contact/>
      </div>
    </div>
  )
};

export default App;
