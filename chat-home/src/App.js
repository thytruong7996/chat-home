import React from 'react';
import './App.css';

import Header from './Common/Components/Header/Header';
import Footer from './Common/Components/Footer/Footer';
import URL from './Common/Router/URL';
function App() {
  
  return (
    <div className="App">
      <Header title="Dashboard"></Header>          
      <URL/>
      <Footer></Footer>
    </div>
  );
}

export default App;
