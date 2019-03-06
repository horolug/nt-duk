import React from 'react';

class Summary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="form-group">
        <ul className="list-group">
          <li className="list-group-item">Laiko skirtumas metais {this.props.timeDiff}</li>
          <li className="list-group-item">Kainu skirtumas {this.props.priceDiff}</li>
          <li className="list-group-item">Notaro mokestis {this.props.notaryFee}</li>
          <li className="list-group-item">
            Moketi mokesciu <strong>{this.props.taxAmount}</strong>
          </li>
          <li className="list-group-item">Pajamu deklaracija uzpildyti iki </li>
          <li className="list-group-item">Pelno mokesti sumoketi iki {this.props.taxDueDate}</li>
        </ul>
      </div>
    );
  }

}

export default Summary;
