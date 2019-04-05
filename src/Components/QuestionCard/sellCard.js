import React from 'react';
import DateBlock from '../DateBlock/dateBlock';
import Expenses from '../Expenses/expenses';
import PropTypes from 'prop-types';

class SellCard extends React.Component {

  render() {
    const cardContent = <div className="card-body">
      <div className="row">
        <div className="col">
          <p> Data </p>
          <DateBlock
            blockType="sell"
            onChange={this.props.dateChange}
            selectedDate={this.props.selectedDate}
            years={this.props.years}
            months={this.props.months}
            days={this.props.days}
          />
          <p>Kaina</p>
          <div className="form-group">
            <input
              type="number"
              name="sellPrice"
              value={this.props.price}
              onChange={this.props.handlePrice}
              className="form-control"/>
          </div>
        </div>
      </div>

      <Expenses
        handleNotaryFee={this.props.handleNotaryFee}
        handleOtherExpenses={this.props.handleOtherExpenses}
        customNotaryFee={this.props.customNotaryFee}
        otherExpenses={this.props.otherExpenses}
        notaryFee={this.props.notaryFee} />

      <div className="text-right">
        <button
          onClick={this.props.nextQuestion}
          className="btn btn-primary">Kitas klausimas </button>
      </div>

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
          <div className="card-header">
            <button className="btn btn-link"> Pardavimas </button>
          </div>
        </div>
      );
    }
  }
}

SellCard.propTypes = {
   price: PropTypes.number.isRequired
}

export default SellCard;
