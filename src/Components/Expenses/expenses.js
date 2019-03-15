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
        <p> Islaidos susijusios su pardavimu</p>
          <button
            onClick={(e) => this.handleClick(e) }
            data-target="expensesOpen"
            className="btn btn-info btn-sm"
            type="button">
            {buttonText}
          </button>


        <div style={infoOpen}>
          <div className="mt-4">
            <label><strong>Notaro mokestis</strong></label>
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

          <div className="mt-4">
            <label><strong>Kitos islaidos</strong></label>
            <p>Islaidos sirtos padidinti turto verte, pavyzdziui, islaidos
              remontui</p>
            <input
              type="number"
              name="purchasePrice"
              onChange={(e) => this.props.handleOtherExpenses(e)}
              className="form-control"/>
          </div>

        </div>
      </div>
    );
  }

}

export default Expenses;
