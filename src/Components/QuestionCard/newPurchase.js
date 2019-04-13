import React from 'react';

class newPurchase extends React.Component {

  render() {
    const cardContent = <div className="card-body">
      <p>
        Pardavus Būsta kur buvo deklaruota gyvenamoji vieta perkamas kitas Būstas kur bus deklaruota gyvenamoji vieta?
      </p>
      <div className="mt-4">
        <button
          id="newPrimaryDwelling"
          className="">Taip</button>
        <button
          id="notnewPrimaryDwelling"
          className="btn btn-light">Ne</button>
      </div>
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
            <div className="card-header">
                <button className="btn btn-link">Kito Būsto pirkimas </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default newPurchase;
