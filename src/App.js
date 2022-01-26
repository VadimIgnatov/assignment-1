//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import skyline from './city-skyline.jpg';
import tower from './cn-tower.jpg';
import newcityhall from './new-city-hall.jpg';
import oldcityhall from './old-city-hall.jpg';
import rogers from './rogers-center.jpg';
import rom from './rom.jpg';


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
        <img src={newcityhall} id= 'e'></img>
        <img src={rogers} id= 'f'></img>
        
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
