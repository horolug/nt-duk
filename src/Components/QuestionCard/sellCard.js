import React from 'react';
import DateBlock from '../DateBlock/dateBlock';

class SellCard extends React.Component {
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
    let infoOpen = {
      display: 'none'
    }
    if(this.state.expensesOpen) {
      infoOpen = {
        display: 'block'
      };
    }
    const buttonText = this.state.expensesOpen ? 'slepti' : 'rodyti daugiau';
    const cardContent = <div className="card-body">
      <div className="row">
        <div className="col">
          <div className="d-flex align-items-end">
            <span className="pb-1">Data</span>
            <button 
              type="button" 
              className="btn btn-link btn-sm"
              onClick={() => this.props.clear('sellDate')}
              >Išvalyti</button>
          </div>
          <DateBlock
            blockType="sell"
            onChange={this.props.dateChange}
            selectedDate={this.props.selectedDate}
            years={this.props.years}
            months={this.props.months}
            days={this.props.days}
          />
          <div className="d-flex align-items-end">
            <span className="pb-1">Kaina, Eur </span>
            <button 
              type="button" 
              className="btn btn-link btn-sm"
              onClick={() => this.props.clear('sellPrice')}
              >Išvalyti</button>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="sellPrice"
              value={this.props.price}
              onChange={this.props.handlePrice}
              className="form-control"/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <p> Notaro mokestis <span className="badge badge-primary">{this.props.notaryFee} Eur</span> </p>
        <p>Sumokėjote kitokį notaro mokėstį? Įveskite:</p>
        <input
          type="number"
          name="purchasePrice"
          value={this.props.customNotaryFee}
          onChange={(e) => this.props.handleNotaryFee(e)}
          className="form-control"/>
      </div>

      <button
        onClick={(e) => this.handleClick(e) }
        data-target="expensesOpen"
        className="btn btn-info btn-sm"
        type="button">
        {buttonText}
      </button>

      <div className="form-group mt-4" style={infoOpen}>
        <label><strong>Notaro mokestis</strong></label>
        <p>Notaro mokestis: 0.45% nuo pardavimo sumos,
          bet ne mažiau kaip 28.96 Eur ir ne daugiau kaip 5792.40 Eur.
          </p>
        <p>Automatiškai paskaičiuota suma yra {this.props.notaryFee} Eur.</p>
      </div>

      <div className="text-right">
        <button
          onClick={this.props.nextQuestion}
          className="btn btn-primary">Kitas klausimas </button>
      </div>

    </div>;
    if ( this.props.isVisible === 2 ){
      return (
        <div className="card mb-2">
          <div className="card-header"> Pardavimas </div>
          {cardContent}
        </div>
      );
    } else {
      return (
        <div
          className="card mb-2"
          onClick={() => this.props.jumpToQuestion(2)} >
          <div className="card-header">
            <button className="btn btn-link"> Pardavimas </button>
          </div>
        </div>
      );
    }
  }
}

export default SellCard;
