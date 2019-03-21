import React from 'react';


class DateBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">


        <div className="col form-group">
          <select
            onChange={this.props.onChange}
            name={this.props.blockType+"Year"}
            className="form-control form-control-md"
            value={this.props.year}
          >
            {this.props.years}
          </select>
        </div>
        <div className="col form-group">
          <select
            onChange={this.props.onChange}
            name={this.props.blockType+"Month"}
            className="form-control form-control-md">
            <option value="">Menuo</option>
            {this.props.months}
          </select>
        </div>
        <div className="col form-group">
          <select
            onChange={this.props.onChange}
            name={this.props.blockType+"Day"}
            className="form-control form-control-md">
            <option value="">Diena</option>
            {this.props.days}
          </select>
        </div>
      </div>
    );
  }

}

export default DateBlock;
