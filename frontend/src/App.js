import './App.css';
import './styles/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Iir from './components/IIR';
import Prediction from './components/Prediction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Login from './components/Login';

function App() {
  const [hostname, setHostname] = useState('');
  useEffect(() => {


  let _hostname = window.location.href;
  let i = _hostname.indexOf("/frontend");
  _hostname = _hostname.substring(0, i);

  setHostname(_hostname);

  }, []);

  return (
    /**
     * TODO : addn basename='/frontend' to BrowserRouter
     */
    <BrowserRouter basename='/frontend'>
      <Navbar hostname={hostname}/>
      <div id="container">
        <Routes>
          <Route exact path="/" element={<Home hostname={hostname} />} />
          <Route path="/prediction" element={<Prediction hostname={hostname} />} />
          <Route path="/iir" element={<Iir hostname={hostname} />} />
          <Route path="/a_propos" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      
        <Footer hostname={hostname}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
