import React from 'react';

class Expenses extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group">
        <h3> Islaidos susijusios su pardavimu </h3>

        <label>Notaro mokestis</label>
        <input
          type="number"
          name="purchasePrice"
          className="form-control"/>

        <label>Islaidos turto remontui / renovacijai</label>
        <input
          type="number"
          name="purchasePrice"
          className="form-control"/>
      </div>
    );
  }

}

export default Expenses;
