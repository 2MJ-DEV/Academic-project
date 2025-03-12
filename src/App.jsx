import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/NavBar";
import MapComponent from "./Components/MapComponent";

function App() {
  return (
    <Router>
      <div className="">
	  <Navbar />
    <MapComponent />
      <Routes>
        <Route path="./pages/Home" exact component={Home} />
      </Routes>
	  </div>
    </Router>
  );
}

export default App;
