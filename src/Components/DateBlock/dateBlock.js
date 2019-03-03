import React from 'react';


class DateBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="form-group">
        <h3>this is dateblock {this.props.blockType}</h3>
        <select
          onChange={this.props.onChange}
          name={this.props.blockType+"Year"}
          className="form-control form-control-lg"
          value={this.props.year}
        >
          {this.props.years}
        </select>
        <select
          onChange={this.props.onChange}
          name={this.props.blockType+"Month"}
          className="form-control form-control-lg">
          <option>Pasirinkite Menesi</option>
          {this.props.months}
        </select>
        <select
          onChange={this.props.onChange}
          name={this.props.blockType+"Day"}
          className="form-control form-control-lg">
          <option>Pasirinkite Diena</option>
          {this.props.days}
        </select>
        <h3>end of dateblock</h3>
      </div>
    );
  }

}

export default DateBlock;
