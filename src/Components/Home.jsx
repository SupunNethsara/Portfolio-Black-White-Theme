import React from 'react'
import Typewriter from 'typewriter-effect';
import softwareitem1 from '/pngwing1.png';
import softwareitem2 from '/pngwing2.png';
import softwareitem3 from '/pngwing3.png';
import softwareitem4 from '/pngwing4.png';
import softwareitem6 from '/pngwing5.png';
import './CSS/Home.css'
function Home() {
  return (
    <div>
      <div className="home-section">
        <div className="text">
          <div className="text-section">
            <h3>Hello there !</h3>
            <h4>I'm Shashimal Liyanage</h4>
            <span className='typewrite'>
              <Typewriter
                options={{
                  strings: ['FullStack Developer', 'Frontend Developer', 'Web Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </span>
            <p>
              With over 2+ Years of experience as a freelance video editor,
              I bring stories to life through compelling visuals and seamless
              storytelling. My passion for filmmaking and content creation
              drives me to craft engaging videos that captivate audiences.
            </p>
            <div className="software">
              <div className="software_item">
                <img className='svg' style={{color:'white'}} src={softwareitem1} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem2} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem3} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem4} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem6} alt="" />
              </div>

            </div>
            <div className="btn">
              <button>Download CV</button>
              <button>More</button>
            </div>
          </div>
        </div>

        <div className="image">
          <div className="img">
            <img src="/black.png" alt="" className="src" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home