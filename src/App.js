import React from 'react';
import logo from './logo.svg';
import './App.css';
const App = () => {
  return (
    <div className='app-wrapper'>
    <header className='header'>
        <img src ='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'>
        </img>
    </header>
    <nav className='nav'>
      <div>
        <a>Profile</a>
      </div>
      <div>
        <a>Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
    <div className='content'>
      <div>
      <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
    </div>
    <div>
      ava+description
    </div>
    <div>
      My Posts
    </div>
    <div>
      New Posts
    </div>
    <div>
      Post1
    </div>
    <div>
      Post2
    </div>
    </div>
    </div>

  )
  }

  
export default App;


