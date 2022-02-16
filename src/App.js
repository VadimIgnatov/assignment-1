//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import skyline from './city-skyline.jpg';
import tower from './cn-tower.jpg';
import newcityhall from './new-city-hall.jpg';
import oldcityhall from './old-city-hall.jpg';
import rogers from './rogers-center.jpg';
import rom from './rom.jpg';
import fb from './fb.png';
import insta from './insta.png';
import linked from './linked.png';
import twitter from './twitter.png';


function App() {
  const images = [skyline, oldcityhall, tower,  rom, rogers, newcityhall];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The City of Toronto
        </p>
        <p>Historical Sites & More</p>
      </header>
      <section id="gallery">
      
        <img src={skyline} id= 'a'></img>
        <img src={oldcityhall} id= 'b'></img>
        <img src={tower} id= 'c'></img>
        <img src={rom} id= 'd'></img>
        <img src={rogers} id= 'e'></img>
        <img src={newcityhall} id= 'f'></img>
        
        
      </section>
      <section id="social">

        <a href="https://twitter.com/cityoftoronto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><img src={twitter}></img></a>
        <a href="https://www.facebook.com/cityofto/" target="_blank"><img src={fb}></img></a>
        <a href="https://ca.linkedin.com/company/city-of-toronto" target="_blank"><img src={linked}></img></a>
        <a href="https://www.instagram.com/cityofto/?hl=en" target="_blank"><img src={insta}></img></a>
       </section> 
      {/* <section>
        {
          images.map(image => <img src={image} alt="logo" onClick={()=>setSelectedImage(image)} />)
        }
      </section> */}
      <div id='overlay' style={{visibility: selectedImage ? 'visible': 'hidden'}}>
        <h1><a class="close" onClick={ ()=>setSelectedImage(null) }>X</a></h1>
        <img src={selectedImage} />
      </div>
    </div>
  );
}

export default App;
