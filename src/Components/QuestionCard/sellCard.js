import React from 'react';
import DateBlock from '../DateBlock/dateBlock'
import Expenses from '../Expenses/expenses'

class SellCard extends React.Component {

  render() {
    const cardContent = <div className="card-body">
      <div className="row">
        <div className="col">
          <p> Data </p>
          <DateBlock
            blockType="sell"
            onChange={this.props.dateChange}
            year={this.props.year}
            years={this.props.years}
            months={this.props.months}
            days={this.props.days}
          />
          <p>Kaina</p>
          <div className="form-group">
            <input
              type="number"
              name="sellPrice"
              onChange={this.props.handlePrice}
              className="form-control"/>
          </div>
        </div>
      </div>

      <Expenses
        handleNotaryFee={this.props.handleNotaryFee}
        handleOtherExpenses={this.props.handleOtherExpenses}
        customNotaryFee={this.props.customNotaryFee}
        notaryFee={this.props.notaryFee} />

      <button
        onClick={() => this.props.previousQuestion(1)}
        className="btn btn-primary mr-4">Pirkimas </button>

      <button
        onClick={this.props.nextQuestion}
        className="btn btn-primary">Kitas klausimas </button>
    </div>;
    if ( this.props.isVisible === 2 ){
      return (
        <div className="card mb-2">
          <div className="card-header"> Pardavimas </div>
          {cardContent}
        </div>
      );
    } else {
      return (
        <div
          className="card mb-2"
          onClick={() => this.props.jumpToQuestion(2)} >
          <div className="card-header"> Pardavimas </div>
        </div>
      );
    }
  }
}

export default SellCard;
