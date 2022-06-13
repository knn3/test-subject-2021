import "./App.css";
import LandingPage from "./components/MainComponent";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
    return (
        <div className="App">
            <Link to="/test-subject-2021/login"> Login</Link>
            <Link to="/test-subject-2021"> Home</Link>

            <Routes>
                <Route
                    path="/test-subject-2021"
                    element={<LandingPage />}
                ></Route>
                <Route
                    path="/test-subject-2021/login"
                    element={<Login />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
