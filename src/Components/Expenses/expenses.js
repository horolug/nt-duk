import React from 'react';
import PropTypes from 'prop-types';

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

    const buttonText = this.state.expensesOpen ? 'slepti' : 'rodyti daugiau';

    return (
      <div className="form-group">
        <h4> Išlaidos susijusios su pardavimu</h4>

        <p> Notaro mokestis <span className="badge badge-primary">{this.props.notaryFee} Eur</span> </p>
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
            <p>Notaro mokestis: 0.45% nuo pardavimo sumos,
              bet ne mažiau kaip 28.96 Eur ir ne daugiau kaip 5792.40 Eur.
              </p>
            <p>Automatiškai paskaičiuota suma yra {this.props.notaryFee} Eur.</p>
            <p>Sumokėjote kitokią sumą? Įveskite:</p>
            <input
              type="number"
              name="purchasePrice"
              value={this.props.notaryFee}
              onChange={(e) => this.props.handleNotaryFee(e)}
              className="form-control"/>
          </div>

          <div className="mt-4">
            <label><strong>Kitos išlaidos</strong></label>
            <p>Ar turėjote kitų išlaidų skirtų padidinti turto vertę, pvz, išlaidų
              remontui?</p>
            <p>Svarbu: išlaidos turi būti pagrįstos dokumentais (vardiniais čekiais ir pan.)</p>
            <p>Visų išlaidų suma, Eur:</p>
            <input
              type="number"
              name="purchasePrice"
              value={this.props.otherExpenses}
              onChange={(e) => this.props.handleOtherExpenses(e)}
              className="form-control"/>
          </div>

        </div>
      </div>
    );
  }
}

Expenses.propTypes = {
   notaryFee: PropTypes.number.isRequired,
   otherExpenses: PropTypes.number
}

export default Expenses;
