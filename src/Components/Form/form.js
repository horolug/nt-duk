import React from 'react';
import moment from 'moment';
import helpers from '../Helpers/helpers';
import Summary from '../Summary/summary';
import QuestionCard from '../QuestionCard/questionCard';
import PurchaseCard from '../QuestionCard/purchaseCard';
import SellCard from '../QuestionCard/sellCard';
import Expenses from '../QuestionCard/expenses';
import NewPurchase from '../QuestionCard/newPurchase';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      showSummaryOnMobile: false,
      sellYear: new Date().getFullYear() + 1,
      sellMonth: 1,
      sellDay: 1,
      sellPrice: "",
      purchaseYear: new Date().getFullYear(),
      purchaseMonth: 1,
      purchaseDay: 1,
      purchasePrice: "",
      primaryDwelling: false,
      dwellingStatus: "",
      yearRange: helpers.yearRange(),
      monthRange: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      currentYear: new Date().getFullYear(),
      timeDiff: "",
      priceDiff: "",
      taxAmount: "Mokėti nereikia",
      notaryFee: "",
      otherExpenses: "",
      customNotaryFee: "",
      taxDueDate: "",
      taxReportDueDate: "",
      isFormValid: false,
      questionStep: 1,
    };
    this.handleDate = this.handleDate.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.handleNotaryFee = this.handleNotaryFee.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  calculateTax( timeDiff, isFormValid ){
    const taxRate = 0.15;
    const isTaxRequired = helpers.isTaxRequired(timeDiff, this.state.dwellingStatus);
    let priceDiff = (this.state.sellPrice - this.state.purchasePrice);
    priceDiff = priceDiff.toFixed(2);
    let taxAmount = "Mokėti nereikia";
    let notaryFee = "";

    let totalExpenses = ""; // notary fee + other expenses
    if ( this.state.customNotaryFee === "" ){
      notaryFee = helpers.calculateNotaryFee(this.state.sellPrice);
      notaryFee = parseFloat(notaryFee).toFixed(2)
    } else {
      notaryFee = this.state.customNotaryFee;
    }

    if (this.state.otherExpenses === ""){
      totalExpenses = parseFloat(notaryFee);
    } else {
      totalExpenses = parseFloat(notaryFee) + parseFloat(this.state.otherExpenses);
    }

    if ( isTaxRequired && (parseFloat(priceDiff) > parseFloat(totalExpenses)) ){
      taxAmount = (priceDiff-totalExpenses) * taxRate;
      taxAmount = helpers.validPrice(taxAmount);
    }

    this.setState({
      taxAmount: taxAmount,
      priceDiff: helpers.validPrice(priceDiff),
      notaryFee: helpers.validPrice(notaryFee),
      timeDiff: timeDiff,
      taxDueDate: helpers.taxDueDate(this.state.sellYear),
      taxReportDueDate: helpers.taxReportDueDate(this.state.sellYear),
      isFormValid: isFormValid
    });
  }

  timeDiff(){
    const purchaseString = this.state.purchaseYear+'-'+this.state.purchaseMonth+'-'+this.state.purchaseDay;
    const sellSrtring = this.state.sellYear+'-'+this.state.sellMonth+'-'+this.state.sellDay;
    const purchaseDate = moment(purchaseString, "YYYY-MM-DD");
    const sellDate = moment(sellSrtring, "YYYY-MM-DD");
    const yearsPassed = sellDate.diff(purchaseDate, 'years');
    return yearsPassed;
  }

  handleDate(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleQuestionCard(event){
    this.setState({
      dwellingStatus: event.target.id
    });
  }

  handleQuestionButton(event){
    event.preventDefault();
    let primaryDwellingFlag = false;
    if (event.target.id === "isPrimaryDwelling"){
      primaryDwellingFlag = true;
    }
    if (primaryDwellingFlag === false){
      this.setState({
        primaryDwelling: primaryDwellingFlag,
        dwellingStatus: ""
      });
    } else {
      this.setState({
        primaryDwelling: primaryDwellingFlag
      });
    }
  }

  handleOptions(event){
    event.preventDefault();
    this.setState({
      dwellingStatus: event.target.id
    });
  }

  handlePrice(event){
    this.setState({
      [event.target.name]: helpers.validPrice(event.target.value)
    });
  }

  handleNotaryFee(event){
    this.setState({
      customNotaryFee: helpers.validPrice(event.target.value)
    });
  }

  handleOtherExpenses(event){
    this.setState({
      otherExpenses: helpers.validPrice(event.target.value)
    });
  }

  jumpToQuestion = (question) => {
    this.setState({
      questionStep: question
    });
  }

  flipQuestionCard(event){
    // purchase card is visible on load
    // when purchase card is filled, sell card is shown
    // when sell card is filled, dwelling options card is shown
    event.preventDefault();
    const currentStep = this.state.questionStep;
    let questionStep = 1;

    const purchaseCard = [
      this.state.purchaseYear,
      this.state.purchaseMonth,
      this.state.purchaseDay,
      this.state.purchasePrice,
    ];
    const saleCard = [
      this.state.sellYear,
      this.state.sellMonth,
      this.state.sellDay,
      this.state.sellPrice,
    ];

    let purhcaseCardFilled = helpers.isCardFilled(purchaseCard);
    let sellCardFilled = helpers.isCardFilled(saleCard);

    if ( purhcaseCardFilled === true ){
      questionStep = 2;
      if (sellCardFilled === true){
        questionStep = 3;
        if ( currentStep === 3 ){
          // this question is optional
          questionStep = 4;
        }
        if ( this.state.dwellingStatus === "primaryDwellingShort"  ){
          questionStep = 5;
        }
      }
    }

    this.setState({
      questionStep: questionStep
    });
  }

  isFormValid(){
    // FIXME - update validation logic
    let formValues = [
      this.state.sellYear,
      this.state.sellMonth,
      this.state.sellDay,
      this.state.sellPrice,
      this.state.purchaseYear,
      this.state.purchaseMonth,
      this.state.purchaseDay,
      this.state.purchasePrice,
    ];

    if ( this.state.primaryDwelling === true ){
      formValues.push(this.state.dwellingStatus);
    }

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
      this.calculateTax( this.timeDiff(), this.isFormValid() );
      this.setState({
        showSummaryOnMobile: true
      });
    }
  }

  render() {
    const purchaseDays = helpers.dayRange(this.state.purchaseYear, this.state.purchaseMonth);
    const sellDays = helpers.dayRange(this.state.sellYear, this.state.sellMonth);

    const purchase = {
      'year': this.state.purchaseYear,
      'month': this.state.purchaseMonth,
      'day': this.state.purchaseDay
    };
    const sell = {
      'year': this.state.sellYear,
      'month': this.state.sellMonth,
      'day': this.state.sellDay
    };
    const { width } = this.state;
    const isMobile = width < 768;
    let questionCard = '';
    if ( this.timeDiff() >= 2 ){
      questionCard = <QuestionCard
        isVisible={this.state.questionStep}
        onChange={(e) => this.handleQuestionCard(e)}
        onClick={(e) => this.handleQuestionButton(e)}
        primaryDwelling={this.state.primaryDwelling}
        dwellingStatus={this.state.dwellingStatus}
        nextQuestion={(e) => this.flipQuestionCard(e)}
        jumpToQuestion={this.jumpToQuestion}
      />;
    }

    let summary = "";
    if ( !isMobile || this.state.showSummaryOnMobile ){
      summary = <div className="col-sm-12 col-md-6">
        <Summary
         purchase={purchase}
         sell={sell}
         purchasePrice={this.state.purchasePrice}
         sellPrice={this.state.sellPrice}
         timeDiff={this.state.timeDiff}
         priceDiff={this.state.priceDiff}
         notaryFee={this.state.notaryFee}
         customNotaryFee={this.state.customNotaryFee}
         otherExpenses={this.state.otherExpenses}
         taxAmount={this.state.taxAmount}
         taxDueDate={this.state.taxDueDate}
         taxReportDueDate={this.state.taxReportDueDate}
        />
      </div>;
    }

    let newPurchase = "";
    if ( this.state.dwellingStatus === "primaryDwellingShort" ){
      newPurchase = <NewPurchase
        isVisible={this.state.questionStep}
        sellDate={sell}
        handleLastQuestion={(e)=>this.handleOptions(e)}
        jumpToQuestion={this.jumpToQuestion}/>;
    }

    return (
      <form>
        <div className="row">
          <div className="col-sm-12 col-md-6">

            <PurchaseCard
              isVisible={this.state.questionStep}
              dateChange={this.handleDate}
              selectedDate={purchase}
              years={helpers.yearRange().map((e, key) => {
                 return <option key={e} value={e}>{e}</option>;
              })}
              months={this.state.monthRange.map((e, key) => {
                 return <option key={e} value={e}>{e}</option>;
               })}
              days={purchaseDays.map( (e) => {
                return <option key={e} value={e}>{e}</option>;
              })}
              handlePrice={this.handlePrice}
              nextQuestion={(e) => this.flipQuestionCard(e)}
              jumpToQuestion={this.jumpToQuestion}
              price={this.state.purchasePrice}
            />

            <SellCard
              isVisible={this.state.questionStep}
              dateChange={this.handleDate}
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
              handleNotaryFee={(e) => this.handleNotaryFee(e)}
              customNotaryFee={this.state.customNotaryFee}
              handlePrice={this.handlePrice}
              notaryFee={helpers.calculateNotaryFee(this.state.sellPrice)}
              nextQuestion={(e) => this.flipQuestionCard(e)}
              jumpToQuestion={this.jumpToQuestion}
              price={this.state.sellPrice}
              selectedDate={sell}
              />

            <Expenses
              isVisible={this.state.questionStep}
              handleOtherExpenses={(e) => this.handleOtherExpenses(e)}
              nextQuestion={(e) => this.flipQuestionCard(e)}
              otherExpenses={this.state.otherExpenses}
              jumpToQuestion={this.jumpToQuestion}
              notaryFee={helpers.calculateNotaryFee(this.state.sellPrice)} />

            {questionCard}
            {newPurchase}

            <div className="mt-4 mb-4 text-center">
              <button
                disabled = {this.isFormValid() ? false : true }
                onClick={this.handleSubmit}
                className="btn btn-primary">
                Skaičiuoti
              </button>
            </div>
          </div>
          {summary}
        </div>
      </form>
    );
  }
}

export default Form;
