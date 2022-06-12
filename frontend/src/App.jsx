import './App.css'
import LandingPage from './components/MainComponent'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar'
import {Routes, Route} from "react-router-dom" 

function App() {

  return (
    <div className="App">
      {/* <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes> */}

      {/* <button>Hello World</button> */}
    </div>
  )
}

export default App
