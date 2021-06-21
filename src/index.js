import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
/*
function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}*/

class Base extends React.Component{
  //send(){
    
  //}onClick={}

  renderbutton(i) {
    return (
      <input type="button" value={i} className='calculator-button'/>
    );
  }
  /*
  renderdisplay(){
    return(
      0
    );
  }
  */
  render() {
    return (
      <div className='calculator-division'>
      <div className='calculator-display-division'>
        0
      </div>
      <div className='calculator-button-division'>
        {this.renderbutton('1')}
        {this.renderbutton('2')}
        {this.renderbutton('3')}
        {this.renderbutton('÷')}
        {this.renderbutton('4')}
        {this.renderbutton('5')}
        {this.renderbutton('6')}
        {this.renderbutton('×')}
        {this.renderbutton('7')}
        {this.renderbutton('8')}
        {this.renderbutton('9')}
        {this.renderbutton('-')}
        {this.renderbutton('C')}
        {this.renderbutton('0')}
        {this.renderbutton('=')}
        {this.renderbutton('+')}
      </div>
      </div>
    );
  }
}
/*
class App extends React.Comment {
  constructor(props){
    super(props);
    this.state = {
      calculatorDisplay:0,
    };
  }

  handleClick(i){
    let operator;
    let previousButton;
    let total;
    let inputNumber = '0';
    let calculatorButtonValue = i;

    if (calculatorButtonValue === 'C'){
      total ='0';
      operator = '+';
      inputNumber = '0';
      this.setState({
        calculatorDisplay :'0',
      });
    } else if (calculatorButtonValue === '+' || calculatorButtonValue === '-' || calculatorButtonValue === '×' || calculatorButtonValue === '÷' || calculatorButtonValue === '='){
      inputNumber = Number(inputNumber);
      if(previousButton !== '+' && previousButton !== '-' && previousButton !== '×' && previousButton !== '÷'){
        if (operator === '+'){
          total = total + inputNumber;
        } else if (operator === '-'){
          total = total - inputNumber;
        } else if (operator === '×'){
          total = total * inputNumber;
        } else if (operator === '÷'){
          total = total / inputNumber;
        }
      }
      operator = calculatorButtonValue;
      inputNumber = '0';
      this.setState({
        calculatorDisplay : total.textContent,
      });
    } else {
      if (operator === '='){
        total = 0;
        operator = '+'
      }
      if (inputNumber === '0'){
        inputNumber = calculatorButtonValue;
      } else {
        inputNumber = inputNumber + calculatorButtonValue;
      }
      this.setState({
        calculatorDisplay : inputNumber.textContent,
      });
    }
    previousButton = calculatorButtonValue;
  }

  render(){
    return(
      <Base
        //total={this.calculatorDisplay}
        //onClick={i => this.handleClick(i)}
      />
    );
  }
}
*/
ReactDOM.render(
  <Base />,
  document.getElementById('root')
);