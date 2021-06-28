import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export class Base extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Operator:'+',
      PreviousButton:'',
      Total:0,
      InputNumber:0,
      CalculatorDisplay:0,
    };
  }

  handleClick(i){
    let operator = this.state.Operator;
    let previousButton = this.state.PreviousButton;
    let total = this.state.Total;
    let inputNumber = this.state.InputNumber;
    let calculatorButtonValue = i;

    //console.log("input:"+i);
    //console.log(previousButton);
    console.log(this.state.Operator);
    //クリア
    if (calculatorButtonValue === 'C'){
      this.setState({
        Operator:'+',
        Total:0,
        InputNumber:0,
        CalculatorDisplay:0,
      });
      //console.log("calculatorDisplay:" + this.state.calculatorDisplay);
    //演算ボタン
    } else if (calculatorButtonValue === '+' || calculatorButtonValue === '-' || calculatorButtonValue === '×' || calculatorButtonValue === '÷' || calculatorButtonValue === '='){
      inputNumber = Number(inputNumber);
      //console.log("total:"+total);
      //console.log("inputNumber:"+inputNumber);
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
      this.setState({
        Operator : calculatorButtonValue,
        Total : total,
        InputNumber : 0,
        CalculatorDisplay : total,
      });
      //console.log("calculatorDisplay:" + this.state.calculatorDisplay);
    } else {
      //イコールボタン
      if (operator === '='){
        this.setState({
          Total : 0,
          Operator : '+',
        })
      }
      //console.log(inputNumber + ":" + toString.call(inputNumber));
      //console.log("calculatorDisplay:" +this.state.calculatorDisplay);

      //数字ボタン
      //初回処理
      if (inputNumber === 0){
        inputNumber = calculatorButtonValue;
        //console.log(inputNumber);
      //2回目以降　桁を増やしていく
      } else {
        inputNumber = this.state.CalculatorDisplay + calculatorButtonValue
        //console.log(inputNumber);
      }
      this.setState({
        CalculatorDisplay : inputNumber,
        InputNumber: inputNumber,
      });
     //console.log("calculatorDisplay:" + this.state.CalculatorDisplay);
    }
    //console.log(calculatorButtonValue);
    this.setState({
      PreviousButton : calculatorButtonValue,
    });
  }

  renderbutton(i) {
    return (
      <input type="button" value={i} onClick={() => this.handleClick(i)} className='calculator-button'/>
    );
  }
  
  renderdisplay(){
    console.log("display:"+this.state.CalculatorDisplay);
    return(
      this.state.CalculatorDisplay
    );
  }
  
  render() {
    return (
      <div className='calculator-division'>
      <div className='calculator-display-division'>
        {this.renderdisplay()}
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

ReactDOM.render(
  <Base />,
  document.getElementById('root')
);