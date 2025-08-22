import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css';
import './asset/font/Font.css';
import Main from './routes/Main';
import Momo from './routes/Momo';
import Roza from './routes/Roza';
import Breath from './routes/Breath';
import About from './routes/About';
import Ceo from './routes/Ceo';
import Business from './routes/Business';
import Service from './routes/Service';
import Menu from './routes/Menu';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import FloatingButtons from './component/FloatingButtons/FloatingButtons';
import ReVillage from './routes/ReVillage';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <FloatingButtons/>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/ceo" element={<Ceo />} />
        <Route path="/business" element={<Business />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/momostable" element={<Momo />} />
        <Route path="/roza119" element={<Roza />} />
        <Route path="/breathbeside" element={<Breath />} />
        <Route path="/revillage" element={<ReVillage />} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
