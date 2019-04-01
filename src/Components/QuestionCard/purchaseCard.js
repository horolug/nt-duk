import React from 'react';
import DateBlock from '../DateBlock/dateBlock'

class PurchaseCard extends React.Component {

  render() {
    const cardContent = <div className="card-body">
      <div className="row">
        <div className="col">
          <p>Data</p>
          <DateBlock
            blockType="purchase"
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
              name="purchasePrice"
              onChange={this.props.handlePrice}
              className="form-control"/>
          </div>
        </div>
      </div>
      <button
        onClick={this.props.nextQuestion}
        className="btn btn-primary">Kitas klausimas </button>
    </div>;
    if( this.props.isVisible === 1 ){
      return (
        <div className="card mb-2">
          <div className="card-header"> Pirkimas </div>
          {cardContent}
        </div>
      );
    } else {
      return (
        <div className="card mb-2">
          <div
            className="card-header"
            onClick={() => this.props.jumpToQuestion(1)} >
            Pirkimas
          </div>
        </div>
      );
    }
  }
}

export default PurchaseCard;
