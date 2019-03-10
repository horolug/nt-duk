import React from 'react';
import moment from 'moment'
import business from 'moment-business';
import helpers from '../Helpers/helpers'
import DateBlock from '../DateBlock/dateBlock'
import OptionList from '../OptionList/optionList'
import Summary from '../Summary/summary'

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
      yearRange: helpers.yearRange(),
      monthRange: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      currentYear: new Date().getFullYear(),
      purchaseDate: "",
      sellDate: "",
      timeDiff: "",
      priceDiff: "",
      taxAmount: "Moketi nereikia",
      taxDueDate: "",
      taxReportDueDate: ""
    };
    this.handleDate = this.handleDate.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  isTaxRequired (timeDiff){
    // 1. Income tax (15%) is due if sell happened less than 10 years after purchaseDay
    // 2. Income tax is not required if ( all conditions must apply ):
    // 2.1 sold property was primary dwelling for less than 2 years
    // 2.2 sell happened less than 10 years after purchase
    // 2.3 money was used to buy another primary dwelling within a year of selling the first one
    // 3. Income tax is not requried if:
    // 3.1 sold property was primary dwelling for more than 2 years

    //3.
    // FIXME - disable option in markup if time diff is less than 2
    if ( timeDiff >= 2  && this.state.dwellingStatus === "primaryDwelling" ){
      console.log("got primary dwelling, no taxes");
      return false;
    } else if ( timeDiff < 10 ){
      return true;
    }
  }

  calculateTax( timeDiff ){
    // FIXME - add following logic
    // 1. when calculating due tax following expenses must be included:
    // 1.2. TBC - real estate agent fees
    // Improvement expenses - TBC the details

    const priceDiff = this.state.sellPrice - this.state.purchasePrice;
    const notaryFee = helpers.calculateNotaryFee(this.state.sellPrice);
    const taxRate = 0.15;
    const isTaxRequired = this.isTaxRequired(timeDiff);
    let taxAmount = "Moketi nereikia";

    if ( isTaxRequired && priceDiff > notaryFee ){
      taxAmount = (priceDiff-notaryFee) * taxRate;
    }

    this.setState({
      taxAmount: taxAmount,
      priceDiff: priceDiff,
      notaryFee: notaryFee,
      timeDiff: timeDiff,
      taxDueDate: this.taxDueDate(),
      taxReportDueDate: this.taxReportDueDate()
    });
  }

  taxReportDueDate(){
    // fixme - refactor so it can be moved to helpers.js
    const sellDate = this.state.sellYear+"-"+this.state.sellMonth+"-"+this.state.sellDay;
    let taxDueDate = "";
    if ( moment(sellDate).isBefore(this.state.sellYear+'-05-01') ){
      taxDueDate = this.state.sellYear+'-05-01';
    } else {
      // sale happened after tax report due date, so tax payment is due in 2 years;
      taxDueDate = (parseInt(this.state.sellYear)+1)+'-05-01';
    }

    return taxDueDate;
  }

  taxDueDate(){
    // sell is to be declared before [year]-05-01, say 2018-05-01
    // tax is to be paid on [year + 1]-05-01, say 2019-05-01
    // tax due date can be only a work day, so of [year]-05-01 is a holiday,
    // next working day is selected
    // [year-05-01] - is a national holiday in Lithuania
    // FIXME - check if next days are not weekend days

    const sellDate = this.state.sellYear+"-"+this.state.sellMonth+"-"+this.state.sellDay;
    // Some problems with library for this one
    // console.log("business.isWeekDay ? ", business.isWeekDay( "2016-07-25 ") );

    let taxPaymentDate = "";
    if ( moment(sellDate).isBefore(this.state.sellYear+'-05-01') ){
      // sale happened before tax report due date, so tax payment is due date is next year;
      taxPaymentDate = (parseInt(this.state.sellYear)+1)+'-05-01';
      return taxPaymentDate
    } else {
      // sale happened after tax report due date, so tax payment is due in 2 years;
      taxPaymentDate = (parseInt(this.state.sellYear)+2)+'-05-01';
      return taxPaymentDate
    }
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
    // FIXME - update validation logic
    const formValues = [
      this.state.sellYear,
      this.state.sellMonth,
      this.state.sellDay,
      this.state.sellPrice,
      this.state.purchaseYear,
      this.state.purchaseMonth,
      this.state.purchaseDay,
      this.state.purchasePrice,
      this.state.dwellingStatus
    ];
    let isFormValid = true;
    for( let i = 0; i < formValues.length; i++ ){
      if (formValues[i].length <= 0){
        isFormValid = false;
      }
    }
    return isFormValid;
  }

  handleSubmit(e){
    e.preventDefault();
    if ( this.isFormValid() ){
      console.log("form is valid, calculating due tax");
      this.calculateTax( this.timeDiff() );
    }
  }

  render() {
    const purchaseDays = helpers.dayRange(this.state.purchaseYear, this.state.purchaseMonth);
    const sellDays = helpers.dayRange(this.state.sellYear, this.state.sellMonth);
    const sellDate = this.state.sellYear +"-"+this.state.sellMonth+"-"+this.state.sellDay;
    const purchaseDate = this.state.purchaseYear +"-"+this.state.purchaseMonth+"-"+this.state.purchaseDay;
    let summary = "";

    if (this.isFormValid()) {
      summary = <Summary
        purchaseDate={purchaseDate}
        sellDate={sellDate}
        purchasePrice={this.state.purchasePrice}
        sellPrice={this.state.sellPrice}
        timeDiff={this.state.timeDiff}
        priceDiff={this.state.priceDiff}
        notaryFee={this.state.notaryFee}
        taxAmount={this.state.taxAmount}
        taxDueDate={this.state.taxDueDate}
        taxReportDueDate={this.state.taxReportDueDate}
      />;
    } else {
      summary = "";
    }

    return (
      <form>
        <h1>Form</h1>

        <h3> Pirkimas </h3>
        <div className="row">
          <div className="col">
            <h4>Data</h4>
            <DateBlock
              blockType="purchase"
              onChange={this.handleDate}
              year={this.state.purchaseYear}
              years={helpers.yearRange().map((e, key) => {
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

          <OptionList
            year={this.state.purchaseYear}
            month={this.state.purchaseMonth}
            day={this.state.purchaseDay}
            price={this.state.purchasePrice}
          />
        </div>

        <h3> Pardavimas </h3>
        <div className="row">
          <div className="col">
            <h3> Data </h3>
            <DateBlock
              blockType="sell"
              onChange={this.handleDate}
              year={this.state.sellYear}
              years={helpers.yearRangeSell(this.state.purchaseYear).map((e, key) => {
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
          <OptionList
            year={this.state.sellYear}
            month={this.state.sellMonth}
            day={this.state.sellDay}
            price={this.state.sellPrice}
          />
        </div>

        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input"
              id="primaryDwelling"
              name="dwellingOption"
              onChange={this.handleOptions}
              type="radio" value="" />
            <label htmlFor="primaryDwelling">
              Parduodamas turtas - paskutinius 2 metus deklaruota gyvenamoji vieta
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
              id="primaryDwellingShort"
              name="dwellingOption"
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
              name="dwellingOption"
              onChange={this.handleOptions}
              type="radio" value="" />
            <label htmlFor="notPrimaryDwelling">
              Parduodamas turtas - gyvenamoji vieta nedeklaruota
            </label>
          </div>
        </div>

        <div className="form-group">
          <button
            disabled = {this.isFormValid() ? false : true }
            onClick={this.handleSubmit}
            className="btn btn-primary">
            Skaiciuoti
          </button>
        </div>

        {summary}

      </form>
    );
  }
}

export default Form;
