import React from 'react';
import salmanPicture from './pictures/SF_DJ.jpg';
import InstagramButton from './components/InstagramButton';
import SoundcloudButton from './components/SoundcloudButton';
import SpotifyButton from './components/SpotifyButton';
import BandcampButton from './components/BandcampButton';
import Contact from './components/Contact';
import OnOurWay from './components/OnOurWay';
import Whatever from './components/Whatever';
import YTButton from './components/YTButton';
import './App.css';
import Penguin from './gifs/cute-penguin.gif';
import Djcat from './gifs/dj-cat.gif';
import Djemoji from './gifs/dj-emoji.gif';
import Gjajadj from './gifs/gjaja-dj.gif';
import Turntable from './gifs/turntable-dj.gif'


function App() {
  return (
    <div className="App">
      {/* 
      <img src={Penguin} className="gif1"/>
      <img src={Djcat} className="gif2"/>
      */}
      <header className="App-header">
        <img src={salmanPicture} className="salmanPicture"/>
        <h1 className="header">
          <div className="font-face-gm">
          SalmanF
          </div>
        </h1>
          <p className="paragraph">
            Dallas, TX
          </p>
        <YTButton />
        <SoundcloudButton />
        <InstagramButton />
        <SpotifyButton />
        <BandcampButton />
        <Contact />
        {/* <OnOurWay />
        <Whatever /> */}
        {/*
        <img src={Djemoji} className="gif3"/>
        <img src={Gjajadj} className="gif4"/>
        <img src={Turntable} className="gif5"/>
        */}
      </header>
    </div>
  );
}

export default App;
