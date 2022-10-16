import './App.css'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import NAv from './components/Navbar/NAv'
import FirstC from './components/Top/FirstC'


function App() {
  return (
    <div className="App">
      <FirstC />
      <NAv />
      <About />
      <Education/>
      <Experience/>
    </div>
  )
}

export default App
