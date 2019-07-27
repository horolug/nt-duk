import React from 'react';
import DateBlock from '../DateBlock/dateBlock';

class PurchaseCard extends React.Component {

  render() {
    const cardContent = <div className="card-body">
      <div className="row">
        <div className="col">
          <div className="d-flex align-items-end">
            <span className="pb-1">Data </span>
            <button 
              type="button" 
              className="btn btn-link btn-sm"
              onClick={() => this.props.clear('purchaseDate')}
              >Išvalyti</button>
          </div>
          <DateBlock
            blockType="purchase"
            onChange={this.props.dateChange}
            selectedDate={this.props.selectedDate}
            years={this.props.years}
            months={this.props.months}
            days={this.props.days}
          />
          <div className="d-flex align-items-end">
            <span className="pb-1">Kaina, Eur </span>
            <button 
              type="button" 
              className="btn btn-link btn-sm"
              onClick={() => this.props.clear('purchasePrice')}
              >Išvalyti</button>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="purchasePrice"
              value={this.props.price}
              onChange={this.props.handlePrice}
              className="form-control"/>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button
          onClick={this.props.nextQuestion}
          className="btn btn-primary">Kitas klausimas </button>
      </div>

    </div>;
    if( this.props.isVisible === 1 ){
      return (
        <div className="card mb-2">
          <div className="card-header">
            Pirkimas
          </div>
          {cardContent}
        </div>
      );
    } else {
      return (
        <div className="card mb-2">
          <div
            className="card-header"
            onClick={() => this.props.jumpToQuestion(1)} >
            <button className="btn btn-link">Pirkimas</button>
          </div>
        </div>
      );
    }
  }
}

export default PurchaseCard;
