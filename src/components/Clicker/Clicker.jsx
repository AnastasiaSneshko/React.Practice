import { Component } from 'react';
import "./clicker.scss";

class Clicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      clickAmount: 0,
      step: 2
    };
  }

  nextStepClick = () => {
    const{clickAmount, step} = this.state;
    this.setState({
      clickAmount: clickAmount + step
    });
  }

  prevStepClick = () => {
    const{clickAmount, step} = this.state;
    this.setState({
      clickAmount: clickAmount - step
    });
  }

  render(){
    const {clickAmount} = this.state;

    const prevBtn = <button className="btn" onClick={this.prevStepClick}>Отнять</button>

    return (
    <div className="container">
      <h1 className="clickerTest">Кликнул {clickAmount} раз</h1>
      <button className="btn nextBtn" onClick={this.nextStepClick}>Добавить</button>
      {clickAmount > 0 ? prevBtn : false}
    </div>)
  }
}

export default Clicker;