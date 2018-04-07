import React, { Component } from 'react';
import './App.css';
import ImageButton from './components/ImageButton/ImageButton';
import piggyBankImg from './assets/image/piggy-bank.png';
import dispenseImg from './assets/image/cash.png';
import BtnWrapper from './components/BtnWrapper/BtnWrapper';

class App extends Component {
  render() {
    return (
      <BtnWrapper>
        <ImageButton src={piggyBankImg} alt="balance" title="Balance"/>
        <ImageButton src={dispenseImg} alt="dispense" title="Dispense"/>
      </BtnWrapper>
    );
  }
}

export default App;
