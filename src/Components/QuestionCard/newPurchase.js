import React from 'react';
import moment from 'moment';

class newPurchase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      purchaseWithinOneYear: false,
      newPrimaryDwelling: false,
      newDwelling: 'btn-light btn',
      noNewDwelling: 'btn-light btn ml-2',
      inOneYear: 'btn-light btn',
      notInOneYear: 'btn-light btn ml-2',
      newPrimary: 'btn-light btn',
      noNewPrimary: 'btn-light btn ml-2',
    };
    this.newDwellingPurchase = this.newDwellingPurchase.bind(this);
    this.purchaseWithinYear = this.purchaseWithinYear.bind(this);
  }

  newDwellingPurchase(e){
    e.preventDefault();
    if(e.target.id === "newDwelling"){
      this.setState({
        purchaseWithinOneYear: true,
      });
    } else {
      this.setState({
        purchaseWithinOneYear: false,
        newPrimaryDwelling: false,
      });
    }
  }

  purchaseWithinYear(e){
    e.preventDefault();
    let fastPurchase = false;
    if(e.target.id === "inOneYear"){
      fastPurchase = true;
    }
    this.setState({
      newPrimaryDwelling: fastPurchase,
    });
  }

  taxExemption(){
    if ( this.state.purchaseWithinOneYear &&  this.state.newPrimaryDwelling ){
      return true;
    }

    return false;
  }

  handleClick(e){
    e.preventDefault();

    // Fixme - needs refactoring

    if ( e.target.id === "newDwelling" ){
      this.newDwellingPurchase(e);
      this.setState({
        newDwelling: 'btn-secondary btn',
        noNewDwelling: 'btn-light btn ml-2',
      });
    }

    if ( e.target.id === "noNewDwelling"){
      this.newDwellingPurchase(e);
      this.setState({
        newDwelling: 'btn-light btn',
        noNewDwelling: 'btn-secondary btn ml-2',
      });
    }

    if (  e.target.id === "inOneYear" ){
      this.purchaseWithinYear(e);
      this.setState({
        inOneYear: 'btn-secondary btn',
        notInOneYear: 'btn-light btn ml-2',
      });
    }

    if (  e.target.id === "notInOneYear" ){
      this.purchaseWithinYear(e);
      this.setState({
        inOneYear: 'btn-light btn',
        notInOneYear: 'btn-secondary btn ml-2',
      });
    }

    if (  e.target.id === "newPrimary" ){
      this.props.handleLastQuestion(e)
      this.setState({
        newPrimary: 'btn-secondary btn',
        noNewPrimary: 'btn-light btn ml-2'
      });
    }

    if (  e.target.id === "noNewPrimary" ){
      this.setState({
        newPrimary: 'btn-light btn',
        noNewPrimary: 'btn-secondary btn ml-2',
      });
    }
  }

  render() {
    const dueYear = parseInt(this.props.sellDate.year, 10) + 1;
    const dateString = dueYear+"-"+this.props.sellDate.month+"-"+this.props.sellDate.day
    const formattedDate = moment(dateString, "YYYY-MM-DD").format("YYYY-MM-DD");
    const purchaseWithinOneYear = <div className="mt-4">
      <p>Ar naujas būstas bus perkamas iki {formattedDate}</p>
      <button
        id="inOneYear"
        onClick={(e) => this.handleClick(e)}
        className={this.state.inOneYear}>Taip</button>
      <button
        id="notInOneYear"
        onClick={(e) => this.handleClick(e)}
        className={this.state.notInOneYear}>Ne</button>
    </div>;
    const newPrimaryDwelling =  <div className="mt-4">
      <p>Ar naujai perkamame būste bus deklaruota gyvenamoji vieta iki {formattedDate}</p>
      <button
        id="newPrimary"
        onClick={(e)=>this.handleClick(e)}
        className={this.state.newPrimary}>Taip</button>
      <button
        id="noNewPrimary"
        onClick={(e)=>this.handleClick(e)}
        className={this.state.noNewPrimary}>Ne</button>
    </div>;

    const cardContent = <div className="card-body">
      <p>
        Pardavus būstą kur buvo deklaruota gyvenamoji vieta perkamas kitas būstas?
      </p>
      <div className="mt-4">
        <button
          id="newDwelling"
          onClick={(e) => this.handleClick(e)}
          className={this.state.newDwelling}>Taip</button>
        <button
          id="noNewDwelling"
          onClick={(e) => this.handleClick(e)}
          className={this.state.noNewDwelling}>Ne</button>
      </div>

      {this.state.purchaseWithinOneYear ?  purchaseWithinOneYear : ""}
      {this.state.newPrimaryDwelling ?  newPrimaryDwelling : ""}
    </div>;

    if ( this.props.isVisible === 5 ){
      return (
        <div className="mb-2">
          <div className="card">
            <div className="card-header">Kito Būsto pirkimas </div>
            {cardContent}
          </div>
        </div>
      );
    } else {
      return (
        <div className="mb-2">
          <div className="card">
            <div
              onClick={() => this.props.jumpToQuestion(5)}
              className="card-header">
                <button className="btn btn-link">
                  Kito Būsto pirkimas
                </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default newPurchase;
