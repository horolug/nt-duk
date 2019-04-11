import React from 'react';

class Expenses extends React.Component {
  render() {
    const cardContent = <div className="card-body">
        <label><strong>Kitos išlaidos</strong></label>
        <p>Ar turėjote kitų išlaidų skirtų padidinti turto vertę, pvz, išlaidų
          remontui?</p>
        <p>Visų išlaidų suma, Eur:</p>
        <input
          type="number"
          name="purchasePrice"
          value={this.props.otherExpenses}
          onChange={(e) => this.props.handleOtherExpenses(e)}
          className="form-control"/>

        <p className="mt-4">Svarbu: išlaidos turi būti pagrįstos dokumentais (vardiniais čekiais ir pan.)</p>
        <p>Svarbu: Jeigu turto vertės didinimui buvo panaudota paskola, sumokėtos palūkanos negali būti įtrauktos į išlaidas.</p>
      </div>;

    if( this.props.isVisible === 3 ){
      return (
        <div className="card mb-2">
          <div className="card-header"> Kitos Išlaidos </div>
          {cardContent}
        </div>
      );
    } else {
      return (
        <div className="card mb-2">
          <div
            onClick={() => this.props.jumpToQuestion(3)}
            className="card-header">
            <button className="btn btn-link"> Kitos Išlaidos </button>
          </div>
        </div>
      );
    }
  }
}

export default Expenses;
