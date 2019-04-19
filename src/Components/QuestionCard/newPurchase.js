import React from 'react';
import moment from 'moment';

class newPurchase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newPurchase: false,
      purchaseInOneYear: false,
      newPrimaryDwelling: false,
      newDwelling: 'btn-light btn',
      noNewDwelling: 'btn-light btn ml-2',
      inOneYear: 'btn-light btn',
      notInOneYear: 'btn-light btn ml-2',
      newPrimary: 'btn-light btn',
      noNewPrimary: 'btn-light btn ml-2',
    };
  }

  newDwellingPurchase(e){
    e.preventDefault();
    if(e.target.id === "newDwelling"){
      this.setState({
        newPurchase: true,
      });
    } else {
      this.setState({
        purchaseInOneYear: false,
        newPurchase: false,
        newPrimaryDwelling: false,
      });
    }
  }

  taxExemption(){
    if ( this.state.newPrimaryDwelling ){
      return true;
    }
    return false;
  }

  purchaseWithinYear(e){
    e.preventDefault();
    let fastPurchase = false;
    console.log("purchaseWithinYear called");
    if(e.target.id === "inOneYear"){
      fastPurchase = true;
    }
    this.setState({
      purchaseInOneYear: fastPurchase,
    });
  }

  newPrimaryDwelling(e){
    e.preventDefault();
    let newPrimary = false
    if(e.target.id === "newPrimary"){
      newPrimary = true;
    }
    this.setState({
      newPrimaryDwelling: newPrimary,
    });
  }

  handleClick(e){
    e.preventDefault();
    const activeYes = 'btn-secondary btn';
    const activeNo = 'btn-secondary btn ml-2';
    const neutralYes = 'btn-light btn';
    const neutralNo = 'btn-light btn ml-2';

    // Fixme - needs refactoring
    if ( e.target.id === "newDwelling" ){
      this.newDwellingPurchase(e);
      this.setState({
        newDwelling: activeYes,
        noNewDwelling: neutralNo,
      });
    }

    if ( e.target.id === "noNewDwelling"){
      this.newDwellingPurchase(e);
      this.setState({
        newDwelling: neutralYes,
        noNewDwelling: activeNo,
      });
    }

    if (  e.target.id === "inOneYear" ){
      this.purchaseWithinYear(e);
      this.setState({
        inOneYear: activeYes,
        notInOneYear: neutralNo,
      });
    }

    if (  e.target.id === "notInOneYear" ){
      this.purchaseWithinYear(e);
      this.setState({
        inOneYear: neutralYes,
        notInOneYear: activeNo,
      });
    }

    if (  e.target.id === "newPrimary" ){
      this.props.taxExemption("true");
      this.setState({
        newPrimary: activeYes,
        noNewPrimary: neutralNo,
      });
    }

    if (  e.target.id === "noNewPrimary" ){
      this.setState({
        newPrimary: neutralYes,
        noNewPrimary: activeNo,
      });
    }
  }

  render() {
    const dueYear = parseInt(this.props.sellDate.year, 10) + 1;
    const dateString = dueYear+"-"+this.props.sellDate.month+"-"+this.props.sellDate.day
    const formattedDate = moment(dateString, "YYYY-MM-DD").format("YYYY-MM-DD");
    const purchaseInOneYear = <div className="mt-4">
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

      {this.state.newPurchase ?  purchaseInOneYear : ""}
      {this.state.purchaseInOneYear ?  newPrimaryDwelling : ""}
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
