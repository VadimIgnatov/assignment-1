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
  const title = ['Toronto', "Old City Hall", "The CN Tower", "Royal Ontario Museum", "The Rogers Center", "Toronto City Hall"];
  const description = ["The SKyline", "The Clock Tower", "one of the Worlds Tallest Towers", " Most Visited Museum in Canada",  "Toronto's Iconic Skydone", "A Brutalist Architecture Masterpiece"];
  const [selectedImage, setSelectedImage] = useState(null);
      




  return (
    <div className="App">
      <header className="App-header">
        <p1>
          The City of <b>Toronto</b>
        </p1>
        <p2>
          Historical Sites & <b>More</b></p2>
      </header>
      <section class="grid">
        {
          images.map(image => <img src={image} alt="logo" onClick={()=>setSelectedImage(image)} />)
        }
        
      </section>
      <div id='overlay' style={{visibility: selectedImage ? 'visible': 'hidden'}}>
        <h1><a class="close" onClick={ ()=>setSelectedImage(null) }>X</a></h1>
        <img src={selectedImage} />
      </div>
        {/* /* /* <section id="gallery">
         
        <img src={skyline} id= 'a' alt="skyline"></img>
        <img src={oldcityhall} id= 'b'></img>
        <img src={tower} id= 'c'></img>
        <img src={rom} id= 'd'></img>
        <img src={rogers} id= 'e'></img>
        <img src={newcityhall} id= 'f'></img>
      </section>  */}
      <section id="social">

        <a href="https://twitter.com/cityoftoronto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><img src={twitter} id="twitter"></img></a>
        <a href="https://www.facebook.com/cityofto/" target="_blank"><img src={fb}id="fb"></img></a>
        <a href="https://ca.linkedin.com/company/city-of-toronto" target="_blank"><img src={linked}id="linked"></img></a>
        <a href="https://www.instagram.com/cityofto/?hl=en" target="_blank"><img src={insta}id="insta"></img></a>
       </section> 
      
      
    </div>
  );
}

export default App;
