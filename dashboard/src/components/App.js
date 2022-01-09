import React from 'react';
import ContentRowTop from './mainContainer/ContentRowTop';
import Footer from './fotter/Footer';
import SideBar from './nav/SideBar';
import SideHeader from './nav/SideHeader';

function App() {
  return (
    <div id="wrapper">
      <SideBar/>
                     {/* 	<div className='App'> */}
      <div id="content-wrapper" className="d-flex flex-column color-back-pp">
      <div id="content" className="color-back-pp">
      <SideHeader/>
      <ContentRowTop/>{/* contenedor */}
        </div>
        <Footer/>
        </div>
    </div> 
  );
}

export default App;
