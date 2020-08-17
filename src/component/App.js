import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <form className='App'>
        <Header/>
        <Main/>
        <Footer/>
      </form>
    );
  }
}

export default App;