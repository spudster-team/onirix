import './App.css';
import './styles/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Orinix from './components/Orinix';
import Iir from './components/IIR';
import Prediction from './components/Prediction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    /**
     * TODO : addn basename='/frontend' to BrowserRouter
     */
    //<BrowserRouter basename='/frontend'>
    <BrowserRouter>
      <Navbar/>
      <div id="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/iir" element={<Iir />} />
          <Route path="/a_propos" element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;