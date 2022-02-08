import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Autonomousrec from './components/Autonomousrec';
import HeadComps from './components/head/HeadComps';
import Searchbar from './components/Searchbar';
import Freeda from './components/Freeda/Freeda';
import Footer from './components/footer/Footer';
import Calling from './components/calling/Calling';
import Callstat from './components/head/Callstat';

function App() {
  return (
    <div>
      <Autonomousrec />
      <Freeda />
      <Searchbar />
      <HeadComps />
      <Sidebar />
      <Footer />
      <Calling />
      <Callstat />
    </div>
  );
}

export default App;
