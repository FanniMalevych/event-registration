import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './App.css'

import Events from "./pages/Events";
import Register from "./pages/Register";
import Participants from "./pages/Participants";


function App() {

  return (

    <>
       <Router>
          <Routes>
            <Route path="/" element={<Events/>}/>
            <Route path="/register/:id" element={<Register/>}/>
            <Route path="/detail/:id" element={<Participants/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
