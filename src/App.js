import React  from 'react';
import './App.css';
import Nav from './components/Nav'
import Title from './components/Title'
import Properties from './components/Properties'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Title />
      <Properties />
      <Footer />
    </div>
  );
}

export default App;
