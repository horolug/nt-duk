import React from 'react';
import moment from 'moment'

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
      yearRange: this.yearRange(),
      yearRangeSell: this.yearRangeSell(),
      monthRange: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      currentYear: new Date().getFullYear(),
      timeDiff: ""
    };
    this.handleDate = this.handleDate.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  yearRangeSell(){
    const currentYear = new Date().getFullYear(),
          maxYear = currentYear + 15;
    let yearRangeSell = [];

    for (  let i = currentYear; i < maxYear; i++  ){
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

  timeDiff(){
    console.log("time diff called");
    const purchaseDate = moment([this.state.purchaseYear,
                                this.state.purchaseMonth,
                                this.state.purchaseDay]);
    const sellDate = moment([this.state.sellYear,
                            this.state.sellMonth,
                            this.state.sellDay]);
    console.log("time diff is", sellDate.diff(purchaseDate, 'days') );
  }

  handleDate(event){
    this.setState({
      [event.target.name]: event.target.value
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
      console.log("item", formValues[i].length);
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
      console.log("form is valid, checking time diff");
      this.timeDiff();
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
            <div className="form-group">
              <select
                onChange={this.handleDate}
                name="purchaseYear"
                className="form-control form-control-lg"
                value={this.state.purchaseYear}>
                {this.state.yearRange.map((e, key) => {
                   return <option key={e} value={e} >{e}</option>;
                 })}
              </select>
              <select
                onChange={this.handleDate}
                name="purchaseMonth"
                className="form-control form-control-lg" >
                <option>Pasirinkite Menesi</option>
                {this.state.monthRange.map((e, key) => {
                   return <option key={e} value={e}>{e}</option>;
                 })}
              </select>
              <select
                onChange={this.handleDate}
                name="purchaseDay"
                className="form-control form-control-lg">
                <option>Pasirinkite Diena</option>
                {purchaseDays.map( (e) => {
                  return <option key={e} value={e}>{e}</option>;
                })}
              </select>
            </div>
            <h4>Kaina</h4>
            <div className="form-group">
              <input
                type="number"
                name="purchasePrice"
                onChange={this.handlePrice}
                className="form-control" type="text"/>
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
            <div className="form-group">
              <select
                onChange={this.handleDate}
                name="sellYear"
                className="form-control form-control-lg"
                value={this.state.sellYear}>
                {this.state.yearRangeSell.map((e, key) => {
                   return <option key={e} value={e}>{e}</option>;
                 })}
              </select>
              <select
                onChange={this.handleDate}
                name="sellMonth"
                className="form-control form-control-lg">
                <option>Pasirinkite Menesi</option>
                {this.state.monthRange.map((e, key) => {
                   return <option key={e} value={e}>{e}</option>;
                 })}
              </select>
              <select
                onChange={this.handleDate}
                name="sellDay"
                className="form-control form-control-lg">
                <option>Pasirinkite Diena</option>
                {sellDays.map( (e) => {
                  return <option key={e} value={e}>{e}</option>;
                })}
              </select>
            </div>
            <h4>Kaina</h4>
            <div className="form-group">
              <input
                type="number"
                name="sellPrice"
                onChange={this.handlePrice}
                className="form-control" type="text"/>
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
            <input className="form-check-input" name="option" type="radio" value="" />
            <label>Vienintelis turtas</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="option" type="radio" value="" />
            <label>Turiu dar</label>
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
            <li className="list-group-item">Laiko skirtumas</li>
            <li className="list-group-item">Kainu skirtumas</li>
          </ul>
        </div>

      </form>
    );
  }
}

export default Form;
