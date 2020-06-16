import React, { Component } from "react";
import css from "./counter.module.css";
import IncrementButton from "./incrementButton";
import DecrementButton from "./decrementButton";
import Value from "./Value";
import Steps from "./Steps";

export default class Counter2 extends Component {
  //Componente com estado compartilhado - tudo é feito por props
  //-> Cada Counter2 compartilha do mesmo estado
  handleButtonClick = (clickType) => {
      this.props.onCount(clickType);
  };

  render() {
    const { countValue, currentStep } = this.props;

    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Value value={countValue} />
        <IncrementButton onIncrement={this.handleButtonClick} />
        <Steps currentStep={currentStep} />
      </div>
    );
  }
}
