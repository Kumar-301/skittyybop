import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import { ImFacebook } from "react-icons/im";
import Home from './Components/Home/Home';
import Navigation from './Components/TopAndBottom/Navigation'
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';
import Pricing from './Components/Pricing/Pricing';
import Footer from './Components/TopAndBottom/Footer';
import SkittyBop from './Components/SkittyBop/SkittyBop';
function App() {
  return (
    <div className="App">
      <Router>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Whoweare" element={<WhoWeAre/>}/>
            <Route path="/SkittyBop" element={<SkittyBop/>}/>
            {/* <Route path="/Blog" element={<Blog/>}/>
            <Route path="/Developer" element={<Developer/>}/> */}
            <Route path="/Pricing" element={<Pricing/>}/>
          </Routes>
          <Footer/>
      </Router>

      
    </div>
  );
}

export default App;
