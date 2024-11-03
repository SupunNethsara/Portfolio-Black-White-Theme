import React, { useState ,useEffect} from 'react';
import { BrowserRouter,NavLink,useLocation, Routes, Route, Link } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import { FaHome, FaUser, FaProjectDiagram, FaChartBar, FaEnvelope } from 'react-icons/fa';
import Home from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faWhatsapp, faInstagram, faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { Skills } from './Components/About/Datatabs/Skills/Skills';
import { Eduacion } from './Components/About/Datatabs/Education/Eduacion';
import { Experience } from './Components/About/Datatabs/Experience/Experience';
import All from './Components/Portfolio/Datatabs/All/All';
import Vedio from './Components/Portfolio/Datatabs/Vedio/Vedio';
import Content from './Components/Portfolio/Datatabs/Contents/Content';


function App() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [value, setValue] = useState(0);
  const menus = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "About", link: "/about", icon: FaUser },
    { name: "Services", link: "/services", icon: FaProjectDiagram },
    { name: "Portfolio", link: "/portfolio", icon: FaChartBar },
    { name: "Contact", link: "/contact", icon: FaEnvelope },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation();

useEffect(() => {
  if (location.pathname === '/portfolio') {
    setValue(0);
  } else if (location.pathname === '/portfolio/vedio') {
    setValue(1);
  } else if (location.pathname === '/portfolio/content') {
    setValue(2);
  }
}, [location]);
  return (
    <div className="main">
      <div className={`sidebar ${open ? "open" : ""}`}>
        <ul className="menu">
          {menus.map((menu, i) => (
            <li key={i}>
              <Link
                to={menu.link}
                onClick={() => setActiveMenu(menu.name)}
                className={`menu-item ${activeMenu === menu.name ? "active" : ""}`}
              >
                <menu.icon className="icon" />

              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="drawer">
        <div className="social-media">
          <div className="logo">
            <h3>SHASHIMAL</h3>
          </div>
          <ul className='list'>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faGithub} /></li>
            <li><FontAwesomeIcon icon={faWhatsapp} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
            <Route index element={<Skills />} />
            <Route path="education" element={<Eduacion/>} />
            <Route path="experience" element={<Experience />} />
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />}>
            <Route index element={<All />} />
            <Route path="vedio" element={<Vedio />} />
            <Route path="content" element={<Content />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
