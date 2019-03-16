import React from 'react';
import moment from 'moment'
import business from 'moment-business';
import helpers from '../Helpers/helpers'
import DateBlock from '../DateBlock/dateBlock'
import Expenses from '../Expenses/expenses'
import OptionList from '../OptionList/optionList'
import Summary from '../Summary/summary'
import QuestionCard from '../QuestionCard/questionCard'

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
      primaryDwelling: false,
      dwellingStatus: "",
      yearRange: helpers.yearRange(),
      monthRange: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      currentYear: new Date().getFullYear(),
      purchaseDate: "",
      sellDate: "",
      timeDiff: "",
      priceDiff: "",
      taxAmount: "Moketi nereikia",
      notaryFee: "",
      otherExpenses: "",
      customNotaryFee: "",
      taxDueDate: "",
      taxReportDueDate: "",
      isFormValid: false,
    };
    this.handleDate = this.handleDate.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.handleNotaryFee = this.handleNotaryFee.bind(this);
  }

  isTaxRequired (timeDiff){
    // 1. Income tax (15%) is due if sell happened less than 10 years after purchaseDay
    // 2. Income tax is not required if ( all conditions must apply ):
    // 2.1 sold property was primary dwelling for less than 2 years
    // 2.2 sell happened less than 10 years after purchase
    // 2.3 money was used to buy another primary dwelling within a year of selling the first one
    // 3. Income tax is not requried if:
    // 3.1 sold property was primary dwelling for more than 2 years

    if ( (timeDiff >= 2)  && (this.state.dwellingStatus === "primaryDwelling") ){
      console.log("got primary dwelling, no taxes");
      return false;
    } else if ( timeDiff < 10 ){
      return true;
    }
  }

  calculateTax( timeDiff, isFormValid ){
    // FIXME - add following logic
    // 1. when calculating due tax following expenses must be included:
    // 1.2. TBC - real estate agent fees
    // Improvement expenses - TBC the details
    // turn all money values into cents before doing any calculations and rounding
    const taxRate = 0.15;
    const isTaxRequired = this.isTaxRequired(timeDiff);
    let priceDiff = (this.state.sellPrice - this.state.purchasePrice);
    priceDiff = priceDiff.toFixed(2);
    let taxAmount = "Moketi nereikia";
    let notaryFee = "";

    let totalExpenses = ""; // notary fee + other expenses
    if ( this.state.customNotaryFee === "" ){
      notaryFee = helpers.calculateNotaryFee(this.state.sellPrice);
      notaryFee = parseFloat(notaryFee).toFixed(2)
    } else {
      notaryFee = this.state.customNotaryFee;
      notaryFee = parseFloat(notaryFee).toFixed(2);
    }

    if (this.state.otherExpenses === ""){
      totalExpenses = parseFloat(notaryFee);
    } else {
      totalExpenses = parseFloat(notaryFee) + parseFloat(this.state.otherExpenses);
    }

    console.log("totalExpenses", totalExpenses);
    console.log("notaryFee", notaryFee);
    console.log("this.state.otherExpenses", this.state.otherExpenses);

    if ( isTaxRequired && (parseFloat(priceDiff) > parseFloat(totalExpenses)) ){
      taxAmount = (priceDiff-totalExpenses) * taxRate;
      taxAmount = taxAmount.toFixed(2);
    }

    this.setState({
      taxAmount: taxAmount,
      priceDiff: priceDiff,
      notaryFee: notaryFee,
      timeDiff: timeDiff,
      taxDueDate: this.taxDueDate(),
      taxReportDueDate: this.taxReportDueDate(),
      isFormValid: isFormValid
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

  handleQuestionCard(event){
    // if (event.target.name === "dwelling"){
    //   this.setState({
    //     primaryDwelling: event.target.checked
    //   });
    // }

    if (event.target.name === "dwellingOption"){
      this.setState({
        dwellingStatus: event.target.id
      });
    }
  }

  handleQuestionButton(event){
    event.preventDefault();
    console.log("event is", event.target.id);

    let primaryDwellingFlag = false;
    if (event.target.id === "isPrimaryDwelling"){
      primaryDwellingFlag = true;
    }

    this.setState({
      primaryDwelling: primaryDwellingFlag
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

  handleNotaryFee(event){
    console.log("handleNotaryFee fired", event.target.value);
    this.setState({
      customNotaryFee: event.target.value
    });
  }

  handleOtherExpenses(event){
    console.log("handleOtherExpenses", event.target.value);
    this.setState({
      otherExpenses: event.target.value
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
    ];
    let isFormValid = true;
    for( let i = 0; i < formValues.length; i++ ){
      if (formValues[i].length <= 0){
        isFormValid = false;
      }
    }
    return isFormValid;
  }

  showformSummary(){
    const sellDate = this.state.sellYear +"-"+this.state.sellMonth+"-"+this.state.sellDay;
    const purchaseDate = this.state.purchaseYear +"-"+this.state.purchaseMonth+"-"+this.state.purchaseDay;
    let summary = "";
    if (this.state.isFormValid) {
      console.log("is form valid?", this.state.isFormValid);
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

    return summary;
  }

  handleSubmit(e){
    e.preventDefault();
    if ( this.isFormValid() ){
      console.log("form is valid, calculating due tax");
      this.calculateTax( this.timeDiff(), this.isFormValid() );
    }
  }

  render() {
    const purchaseDays = helpers.dayRange(this.state.purchaseYear, this.state.purchaseMonth);
    const sellDays = helpers.dayRange(this.state.sellYear, this.state.sellMonth);
    const sellDate = this.state.sellYear +"-"+this.state.sellMonth+"-"+this.state.sellDay;
    const purchaseDate = this.state.purchaseYear +"-"+this.state.purchaseMonth+"-"+this.state.purchaseDay;


    return (
      <form>
        <div className="card mb-2">
          <div className="card-header"> Pirkimas </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p>Data</p>
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
                <p>Kaina</p>
                <div className="form-group">
                  <input
                    type="number"
                    name="purchasePrice"
                    onChange={this.handlePrice}
                    className="form-control"/>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="card mb-2">
          <div className="card-header"> Pardavimas </div>
          <div className="card-body">

            <div className="row">
              <div className="col">
                <p> Data </p>
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
                <p>Kaina</p>
                <div className="form-group">
                  <input
                    type="number"
                    name="sellPrice"
                    onChange={this.handlePrice}
                    className="form-control"/>
                </div>
              </div>
            </div>
            <Expenses
              handleNotaryFee={(e) => this.handleNotaryFee(e) }
              handleOtherExpenses={(e) => this.handleOtherExpenses(e)}
              customNotaryFee={this.state.customNotaryFee}
              notaryFee={ helpers.calculateNotaryFee(this.state.sellPrice)} />
          </div>
        </div>

        <QuestionCard
          onChange={(e) => this.handleQuestionCard(e)}
          onClick={(e) => this.handleQuestionButton(e)}
          primaryDwelling={this.state.primaryDwelling}
        />

        <div className="form-group">
          <button
            disabled = {this.isFormValid() ? false : true }
            onClick={this.handleSubmit}
            className="btn btn-primary">
            Skaiciuoti
          </button>
        </div>

        {this.showformSummary()}

      </form>
    );
  }
}

export default Form;
