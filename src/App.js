import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './Components/Header'
import Body from './Components/Body'

class App extends Component {
  render() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
  }
}

export default App;