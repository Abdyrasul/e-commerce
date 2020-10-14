import React from 'react';
import './App.scss';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Slideshow from "./components/slideshow/slideshow"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Slideshow />
        <Footer />
       

      </header>
    </div>
  );
}

export default App;
