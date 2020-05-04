import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

class App extends Component {
  render() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
  }
}

export default App;