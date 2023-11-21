import React from 'react';
import './app1.css';
import { action,originals,comedy } from './urls';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div >
         
        <Navbar/>
         <Banner/>
        <RowPost url={originals} title='netflix'/>
        <RowPost url={action} title='action movies' isSmall/>
        <RowPost url={comedy} title='comedy' isSmall/>

    </div>
    
  );
}

export default App;
