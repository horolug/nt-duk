import React from 'react';

class Expenses extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expensesOpen: false
    };
  }

  handleClick(event){
    this.setState({
      expensesOpen: !this.state.expensesOpen
    });
  }

  render() {
    // Fixme - info toggle to be moved into dedicated helper
    let infoOpen = {
      display: 'none'
    }
    if(this.state.expensesOpen) {
      infoOpen = {
        display: 'block'
      };
    }

    const buttonText = this.state.expensesOpen ? 'slepti' : 'rodyti';

    return (
      <div className="form-group">
        <h3> Islaidos susijusios su pardavimu
          <button
            onClick={(e) => this.handleClick(e) }
            data-target="expensesOpen"
            className="btn btn-info btn-sm"
            type="button">
            {buttonText}
          </button>
        </h3>

        <div style={infoOpen}>
          <label>Notaro mokestis</label>
          <p>Notaro mokestis : 0.45 procento nuo sumos,
            bet ne mažiau kaip 28.96 Eur ir ne daugiau kaip 5792.4 Eur.
            </p>
          <p>Automatiskai paskaiciuota suma yra {this.props.notaryFee}.
            Jeigu buvo sumoketa kita suma, prasome ivesti ja</p>
          <input
            type="number"
            name="purchasePrice"
            onChange={(e) => this.props.handleNotaryFee(e)}
            className="form-control"/>
        </div>
      </div>
    );
  }

}

export default Expenses;
