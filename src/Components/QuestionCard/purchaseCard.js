import React from 'react';
import DateBlock from '../DateBlock/dateBlock'

class PurchaseCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mb-2">
        <div className="card-header"> Pirkimas </div>
        <div className="card-body">
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
        </div>
      </div>
    );
  }

}

export default PurchaseCard;
