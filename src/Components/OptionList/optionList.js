import React from 'react';

class OptionList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col">
        <h3> pasirinkta: </h3>
        <ul className="list-group">
          <li className="list-group-item">Metai {this.props.year}</li>
          <li className="list-group-item">Menuo {this.props.month}</li>
          <li className="list-group-item">Diena {this.props.day}</li>
          <li className="list-group-item">Kaina {this.props.price}</li>
        </ul>
      </div>
    );
  }

}

export default OptionList;
