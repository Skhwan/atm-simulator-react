import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import ImageButton from './components/ImageButton/ImageButton';
// import piggyBankImg from './assets/image/piggy-bank.png';
// import dispenseImg from './assets/image/cash.png';
// import BtnWrapper from './components/BtnWrapper/BtnWrapper';
// import NumberBtn from './components/NumberBtn/NumberBtn';
import Numpad from './components/Numpad/Numpad';
import Result from './components/Result/Result';

class App extends Component {

  state = {
    userInput: "",
    resultStr: "PLEASE ENTER DESIRED AMOUNT",
    resultCode: "",
    key: ""
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

  apiCalledHandler = () => {
    const amount = this.state.userInput;

    if(amount !== ""){
      let newResultStr = "";
      var th = this;
      const source = "http://localhost:8080/atm-simulator/dispense?amount=" + amount;
      this.serverRequest = 
        axios.get(source)
          .then(function(result) {    
            console.log(result.data);
            newResultStr += result.data['responseDesc'];
            if("0" === result.data['responseCode']){
              newResultStr += " DISPENSING AMOUNT " + amount;
            }
            th.setState({
              resultStr: newResultStr,
              resultCode: result.data['responseCode'],
              key: Math.random()
            });
          })
          .catch(error => {
            th.setState({
              resultStr: "OUT OF SERVICE",
              resultCode: "1",
              key: Math.random()
            });
          });
      this.clearNumberHandler();
    } else {
      this.setState({
        resultStr: "PLEASE ENTER DISPENSED AMOUNT",
        resultCode: "1",
        key: Math.random()
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Numpad 
          userInput={this.state.userInput}
          clicked={this.numberClickedHandler}
          del={this.deleteNumberHandler}
          clear={this.clearNumberHandler}
          dispense={this.apiCalledHandler} />
        <Result 
          key={this.state.key}
          resultStr={this.state.resultStr} 
          resultCode={this.state.resultCode} />
      </div>
    );
  }
}

export default App;
