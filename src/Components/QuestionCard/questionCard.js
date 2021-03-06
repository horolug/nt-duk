import React from 'react';

class questionCard extends React.Component {

  render() {
    let questionCard2 = "";
    let selectedButton = "btn-light btn mr-2";
    let nextQuestion = "";


    if ( this.props.dwellingStatus === "primaryDwellingShort" ){
      nextQuestion = <div className="text-right">
        <button
          onClick={this.props.nextQuestion}
          className="btn btn-primary mt-2">Kitas klausimas </button>
      </div>;
    }

    if ( this.props.primaryDwelling ){
      selectedButton = "btn-secondary btn mr-2";
      questionCard2 =<div className="mt-4"><div className="form-check">
            <input className="form-check-input"
              id="primaryDwellingShort"
              name="dwellingOption"
              type="radio"
              value=""
              onChange={(e)=>this.props.onChange(e)}
            />
            <label className="form-check-label" htmlFor="primaryDwellingShort">
              Trumpiau nei 2 metai
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
              id="primaryDwelling"
              name="dwellingOption"
              type="radio"
              value=""
              onChange={(e)=>this.props.onChange(e)}
            />
            <label className="form-check-label" htmlFor="primaryDwelling">
              Ilgiau nei 2 metai
            </label>
          </div>
        </div>;
    }

    const cardContent = <div className="card-body">
            <label className="form-check-label" htmlFor="primaryDwelling">
              Ar parduodamame turte deklaruota jūsų gyvenamoji vieta?
            </label>
            <div className="mt-4">
              <button
                id="isPrimaryDwelling"
                onClick={(e)=>this.props.onClick(e)}
                className={selectedButton}>Taip</button>
              <button
                id="notPrimaryDwelling"
                onClick={(e)=>this.props.onClick(e)}
                className="btn btn-light">Ne</button>
            </div>
            {questionCard2}
            {nextQuestion}
          </div>;

    if ( this.props.isVisible === 4 ){
      return (
        <div className="mb-2">
          <div className="card">
            <div className="card-header"> Deklaruota gyvenamoji vieta </div>
            {cardContent}
          </div>
        </div>
      );
    } else {
      return (
        <div className="mb-2">
          <div className="card">
            <div
              className="card-header"
              onClick={() => this.props.jumpToQuestion(4)}>
                <button className="btn btn-link"> Deklaruota gyvenamoji vieta </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default questionCard;
