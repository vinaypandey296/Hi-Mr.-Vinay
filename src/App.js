import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      
      <Header />
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About Us />} />
      <Route path="contact" element={<Contact />} />
    </Routes>

      
    </div>
    
  );
}

export default App;
