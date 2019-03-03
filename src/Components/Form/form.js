import React from 'react';
import moment from 'moment'
import DateBlock from '../DateBlock/dateBlock'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellYear: new Date().getFullYear() + 1,
      sellMonth: "",
      sellDay: "",
      sellPrice: "",
      purchaseYear: new Date().getFullYear(),
      purchaseMonth: "",
      purchaseDay: "",
      purchasePrice: "",
      dwellingStatus: "",
      yearRange: this.yearRange(),
      //yearRangeSell: this.yearRangeSell(),
      monthRange: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      currentYear: new Date().getFullYear(),
      purchaseDate: "",
      sellDate: "",
      timeDiff: "",
      priceDiff: "",
      taxAmount: "Moketi nereikia"
    };
    // this.handleDate = this.handleDate.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  yearRange(){
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 90;
    const maxYear = currentYear + 1;
    let yearRange = [];

    for (  let i = minYear; i < maxYear; i++  ){
      yearRange.push(i);
    }
    return yearRange;
  }

  yearRangeSell( purchaseYear ){
    // FIXME sell year range should be updated to allign with purchase yars.
    // example : to check sell scenario that happened in the past
    // console.log("purchaseYear", purchaseYear);
    // console.log("typeof ", typeof purchaseYear);

    // const currentYear = new Date().getFullYear();
    const maxYear = parseInt(purchaseYear, 10) + 15;
    let yearRangeSell = [];

    for (  let i = purchaseYear; i < maxYear; i++  ){
       yearRangeSell.push(i);
     }

    return yearRangeSell;
  }

  dayRange(year, month){
    const maxDays = moment(year+"-"+month, "YYYY-MM").daysInMonth();
    let dayRange = [];
    for (  let i = 1; i < maxDays; i++  ){
      dayRange.push(i);
    }
    return dayRange;
  }

  isTaxRequired (timeDiff){
    // 1. Income tax (15%) is due if sell happened less than 10 years after purchaseDay
    // 2. Income tax is not required if ( all conditions must apply ):
    // 2.1 sold property was primary dwelling for less than 2 years
    // 2.2 sell happened less than 10 years after purchase
    // 2.3 money was used to buy another primary dwelling
    // 3. Income tax is not requried if:
    // 3.1 sold property was primary dwelling for more than 2 years
    console.log("===", this.state.dwellingStatus);

    //3.
    // FIXME - disable option in markup if time diff is less than 2
    if ( timeDiff >= 2  && this.state.dwellingStatus === "primaryDwelling"){
      console.log("got primary dwelling, no taxes");
      return false;
    }
    // 1.
    if ( timeDiff < 10 ){
      return true;
    }

  }

  calculateNotaryFee( sellPrice ){
     // notary fee : 0.45 procento nuo sumos, bet ne mažiau kaip 28.96 Eur ir ne daugiau kaip 5792.4 Eur
    let notaryFee = sellPrice * 0.0045;
    if ( notaryFee < 28.96  ){
      notaryFee = 28.96;
    } else if (notaryFee > 5792.4){
      notaryFee = 5792.4;
    }
    return notaryFee;
  }


  calculateTax( timeDiff ){
    // FIXME - add following logic
    // 1. when calculating due tax following expenses must be included:
    // 1.2. TBC - real estate agent fees

    const priceDiff = this.state.sellPrice - this.state.purchasePrice;
    const notaryFee = this.calculateNotaryFee(this.state.sellPrice);
    const taxRate = 0.15;
    let taxAmount = "Moketi nereikia";

    // FIXME - if tax required to be a separate function with set of rules
    if ( this.isTaxRequired (timeDiff) && priceDiff > notaryFee ){
      taxAmount = (priceDiff-notaryFee) * taxRate;
    }

    this.setState({
      taxAmount: taxAmount,
      priceDiff: priceDiff,
      notaryFee: notaryFee,
      timeDiff: timeDiff
    });
  }

  taxDueDate(){
    // sell is to be declared before [year]-05-01, say 2018-05-01
    // tax is to be paid on [year + 1]-05-01, say 2019-05-01
    // tax due date can be only a work day, so of [year]-05-01 is a holiday,
    // next working day is selected

  }

  timeDiff(){
    const purchaseDate = moment([this.state.purchaseYear,
                                this.state.purchaseMonth,
                                this.state.purchaseDay]);
    const sellDate = moment([this.state.sellYear,
                            this.state.sellMonth,
                            this.state.sellDay]);
    const yearsPassed = sellDate.diff(purchaseDate, 'years');
    return yearsPassed;
  }

  handleDate(event){
    console.log("this is what handleDate is getting", event.target.name);
    console.log("this is what handleDate is getting", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOptions(event){
    this.setState({
      dwellingStatus: event.target.id
    });
  }

  handlePrice(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  isFormValid(){
    const formValues = [
      this.state.sellYear,
      this.state.sellMonth,
      this.state.sellDay,
      this.state.sellPrice,
      this.state.purchaseYear,
      this.state.purchaseMonth,
      this.state.purchaseDay,
      this.state.purchasePrice,
    ];
    let isFormValid = false;

    for( let i = 0; i < formValues.length; i++ ){
      if (formValues[i].length > 0){
        isFormValid = true;
      }
    }

    return isFormValid;
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("handleSubmit fired");

    if ( this.isFormValid() ){
      console.log("form is valid, calculating due tax");
      this.calculateTax( this.timeDiff() );
    }
  }

  render() {
    const purchaseDays = this.dayRange(this.state.purchaseYear, this.state.purchaseMonth);
    const sellDays = this.dayRange(this.state.sellYear, this.state.sellMonth);
    return (
      <form>
        <h1>Form</h1>

        <h3> Pirkimas </h3>
        <div className="row">
          <div className="col">
            <h4>Data</h4>
            <DateBlock
              blockType="purchase"
              onChange={ this.handleDate.bind(this) }
              year={this.state.purchaseYear}
              years={this.yearRange().map((e, key) => {
                 return <option key={e} value={e}>{e}</option>;
              })}
              months={this.state.monthRange.map((e, key) => {
                 return <option key={e} value={e}>{e}</option>;
               })}
              days={purchaseDays.map( (e) => {
                return <option key={e} value={e}>{e}</option>;
              })}
            />
            <h4>Kaina</h4>
            <div className="form-group">
              <input
                type="number"
                name="purchasePrice"
                onChange={this.handlePrice}
                className="form-control"/>
            </div>
          </div>
          <div className="col">
            <h3> pasirinkta:  </h3>
            <ul className="list-group">
              <li className="list-group-item">Metai {this.state.purchaseYear}</li>
              <li className="list-group-item">Menuo {this.state.purchaseMonth}</li>
              <li className="list-group-item">Diena {this.state.purchaseDay}</li>
              <li className="list-group-item">Kaina {this.state.purchasePrice}</li>
            </ul>
          </div>
        </div>

        <h3> Pardavimas </h3>
        <div className="row">
          <div className="col">
            <h3> Data </h3>
            <DateBlock
              blockType="sell"
              onChange={this.handleDate.bind(this)}
              year={this.state.sellYear}
              years={this.yearRangeSell(this.state.purchaseYear).map((e, key) => {
                 return <option key={e} value={e}>{e}</option>;
              })}
              months={this.state.monthRange.map((e, key) => {
                 return <option key={e} value={e}>{e}</option>;
               })}
              days={sellDays.map( (e) => {
                return <option key={e} value={e}>{e}</option>;
              })}
            />
            <h4>Kaina</h4>
            <div className="form-group">
              <input
                type="number"
                name="sellPrice"
                onChange={this.handlePrice}
                className="form-control"/>
            </div>
          </div>
          <div className="col">
            <h3> pasirinkta: </h3>
            <ul className="list-group">
              <li className="list-group-item">Metai {this.state.sellYear}</li>
              <li className="list-group-item">Menuo {this.state.sellMonth}</li>
              <li className="list-group-item">Diena {this.state.sellDay}</li>
              <li className="list-group-item">Kaina {this.state.sellPrice}</li>
            </ul>
          </div>
        </div>

        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input"
              id="primaryDwelling"
              name="option"
              onChange={this.handleOptions}
              type="radio" value="" />
            <label htmlFor="primaryDwelling">
              Parduodamas turtas - paskutinius 2 metus deklaruota gyvenamoji vieta
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
              id="primaryDwellingShort"
              name="option"
              onChange={this.handleOptions}
              type="radio" value="" />
            <label htmlFor="primaryDwellingShort">
              Parduodamas turtas - maziau nei paskutinius 2 metus deklaruota gyvenamoji vieta
            </label>
          </div>
          <div className="form-check">
            <input
            className="form-check-input"
              id="notPrimaryDwelling"
              name="option"
              onChange={this.handleOptions}
              type="radio" value="" />
            <label htmlFor="notPrimaryDwelling">
              Parduodamas turtas - gyvenamoji vieta nedeklaruota
            </label>
          </div>
        </div>

        <div className="form-group">
          <button onClick={this.handleSubmit}
            className="btn btn-primary">
            Skaiciuoti
          </button>
        </div>

        <div className="form-group">
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">Laiko skirtumas metais {this.state.timeDiff}</li>
            <li className="list-group-item">Kainu skirtumas {this.state.priceDiff}</li>
            <li className="list-group-item">Notaro mokestis {this.state.notaryFee}</li>
            <li className="list-group-item">
              Moketi mokesciu <strong>{this.state.taxAmount}</strong>
            </li>
          </ul>
        </div>

      </form>
    );
  }
}

export default Form;
