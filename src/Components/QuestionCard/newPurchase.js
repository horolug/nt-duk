import React from 'react';

class newPurchase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      purchaseWithinOneYear: false,
      newPrimaryDwelling: false
    };
    this.newDwellingPurchase = this.newDwellingPurchase.bind(this);
    this.purchaseWithinYear = this.purchaseWithinYear.bind(this);
  }

  newDwellingPurchase(e){
    e.preventDefault();
    if(e.target.id === "newPrimaryDwelling"){
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
    if(e.target.id === "newDwellingInOneYear"){
      fastPurchase = true;
    }
    this.setState({
      newPrimaryDwelling: fastPurchase,
    });
  }

  render() {
    const purchaseWithinOneYear = <div className="mt-4">
      <p>Ar naujas būstas bus perkamas iki [Insert sell date + 1 year]</p>
      <button
        id="newDwellingInOneYear"
        onClick={(e) => this.purchaseWithinYear(e)}
        className="btn btn-light">Taip</button>
      <button
        id="noNewDwellingInOneYear"
        onClick={(e) => this.purchaseWithinYear(e)}
        className="btn btn-light ml-2">Ne</button>
    </div>;
    const newPrimaryDwelling =  <div className="mt-4">
      <p>Ar naujai perkamame būste bus deklaruota gyvenamoji vieta iki [Insert sell date + 1 year]</p>
      <button
        id="primaryDwellingInOneYear"
        className="btn btn-light ">Taip</button>
      <button
        id="noPrimaryDwellingInOneYear"
        className="btn btn-light ml-2">Ne</button>
    </div>;

    const cardContent = <div className="card-body">
      <p>
        Pardavus būstą kur buvo deklaruota gyvenamoji vieta perkamas kitas būstas?
      </p>
      <div className="mt-4">
        <button
          id="newPrimaryDwelling"
          onClick={(e) => this.newDwellingPurchase(e)}
          className="btn btn-light">Taip</button>
        <button
          id="notnewPrimaryDwelling"
          onClick={(e) => this.newDwellingPurchase(e)}
          className="btn btn-light ml-2">Ne</button>
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
