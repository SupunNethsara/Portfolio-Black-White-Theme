import React, { useState, useEffect } from 'react';
import './CSS/Portfolio.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { NavLink, Outlet, Link } from 'react-router-dom';
function Portfolio() {

  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='portfolio'>
      <h2 className='heading-title'>Portfolio</h2>

      <div className="port-section">
        <div className="text">
          <div className="text-sec">
            <h3>My Works</h3>
            <p>With over 2+ Years of experience as a freelance video editor,
              I bring stories to life through compelling visuals and seamless
              storytelling. My passion for filmmaking and content creation drives
              me to craft engaging videos that captivate audiences. Whether it’s
              editing dynamic vlogs, promotional content</p>
            <div className="circle">
              <h4>Hire ME</h4>
            </div>

          </div>
        </div>
        <div className="image">
          <div className="nav-tab">
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="primary"
                aria-label="custom tabs example"
                sx={{
                  '.MuiTabs-indicator': { backgroundColor: '#ffffff' },
                  '.MuiTab-root': {
                    color: '#E6DCDC',
                    padding: '12px',
                    fontSize: '12px',
                    margintop: '12px',
                    marginLeft: '40px', // Default font size
                  },
                  '.Mui-selected': { color: '#ffffff', fontWeight: 'bold' },
                  '.MuiTab-root:hover': { color: '#928e9c' },
                  width: '100%',
                  '@media (min-width: 579px) and (max-width: 768px)': {
                    display: 'flex',
                    justifyContent: 'center', // Center the tabs
                    '.MuiTab-root': {
                      fontSize: '0.9rem',
                      marginLeft: '30px', // Adjusting margin to left
                    },
                  },
                  '@media (max-width: 576px)': {
                    '.MuiTab-root': {
                      fontSize: '0.6rem',
                      padding: '10px',
                      margin: '12px',
                    },
                  },
                  '@media (min-width: 993px) and (max-width: 1200px)': {
                    '.MuiTab-root': {
                      fontSize: '10px',
                      padding: '10px',
                      margin: '0px',
                    },
                  },
                }}
              >
                <Tab
                  component={NavLink}
                  to="/portfolio"
                  value="one"
                  label="All"
                  sx={{ textDecoration: 'none' }}
                />
                <Tab
                  component={NavLink}
                  to="/portfolio/vedio"
                  value="three"
                  label="Vedio"
                  sx={{ textDecoration: 'none' }}
                />
                <Tab
                  component={NavLink}
                  to="/portfolio/content"
                  value="four"
                  label="Content"
                  sx={{ textDecoration: 'none' }}
                />
              </Tabs>
            </Box>

          </div>
          <div>
            <Outlet/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Portfolio