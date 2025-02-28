import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <div className="">
	  <Navbar />
      <Routes>
        <Route path="./pages/Home" exact component={Home} />
      </Routes>
	  </div>
    </Router>
  );
}

export default App;
