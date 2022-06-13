import './App.css'
import LandingPage from './components/MainComponent'
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {

  return (
      <div className="App">
          <Link to="/login"> Login</Link>
          <Link to="/"> Home</Link>

          <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/login" element={<Login />}></Route>
          </Routes>
      </div>
  );
}

export default App
