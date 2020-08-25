import React from 'react';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Main from './component/main/Main';
import './App.css';

class Insurance extends React.Component{
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

export default Insurance;