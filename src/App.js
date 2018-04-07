import React, { Component } from 'react';
import './App.css';
// import ImageButton from './components/ImageButton/ImageButton';
// import piggyBankImg from './assets/image/piggy-bank.png';
// import dispenseImg from './assets/image/cash.png';
// import BtnWrapper from './components/BtnWrapper/BtnWrapper';
// import NumberBtn from './components/NumberBtn/NumberBtn';
import Numpad from './components/Numpad/Numpad';

class App extends Component {

  state = {
    userInput: ""
  }

  numberClickedHandler = (number) => {
    if(this.state.userInput.length < 6) {
      const inp = this.state.userInput + number;
      this.setState({
        userInput: inp
      })
    }
  }

  clearNumberHandler = () => {
    this.setState({
      userInput: ""
    })
  }

  deleteNumberHandler = () => {
    const inp = this.state.userInput.substring(0, this.state.userInput.length - 1);
    this.setState({
      userInput: inp
    })
  }

  render() {
    return (
      // <BtnWrapper>
      //   <ImageButton src={piggyBankImg} alt="balance" title="Balance"/>
      //   <ImageButton src={dispenseImg} alt="dispense" title="Dispense"/>
      // </BtnWrapper>
      <div className="App">
        <div float="left">
          <Numpad 
            userInput={this.state.userInput}
            clicked={this.numberClickedHandler}
            del={this.deleteNumberHandler}
            clear={this.clearNumberHandler} />
        </div>
        <div float="left">
          <h1>RESULT STRING HERE</h1>
        </div>
      </div>
    );
  }
}

export default App;
