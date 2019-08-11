import React from 'react';
import './App.css';

import Header from './Common/Components/Header/Header';
import FriendList from './Common/Components/Friend_List/FriendList';
import Footer from './Common/Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      
      <Header title="Dashboard"></Header>          
      <FriendList></FriendList>
      <Footer></Footer>
    </div>
  );
}

export default App;
