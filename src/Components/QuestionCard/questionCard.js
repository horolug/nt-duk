import React from 'react';

class questionCard extends React.Component {

  render() {
    let questionCard2 = "";
    let selectedButton = "btn-info btn mr-2";

    if ( this.props.primaryDwelling){
      selectedButton = "btn-secondary btn mr-2";
      questionCard2 =<div className="card">
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input"
              id="primaryDwellingShort"
              name="dwellingOption"
              type="radio"
              value=""
              onChange={(e)=>this.props.onChange(e)}
            />
            <label className="form-check-label" htmlFor="primaryDwellingShort">
              Deklaruota gyvenimo vieta maziau nei 2 metai
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
              Deklaruota gyvenimo vieta daugiau nei 2 metai
            </label>
          </div>
        </div>
      </div>;
    }

    if ( this.props.isVisible === 3 ){
      return (
        <div className="mb-2">
          <div className="card">
            <div className="card-body">
              <label className="form-check-label" htmlFor="primaryDwelling">
                Ar parduodamas turtas - deklaruota gyvenimo vieta
              </label>
              <div className="mt-4">
                <button
                  id="isPrimaryDwelling"
                  onClick={(e)=>this.props.onClick(e)}
                  className={selectedButton}>Taip</button>
                <button
                  id="notPrimaryDwelling"
                  onClick={(e)=>this.props.onClick(e)}
                  className="btn btn-info">Ne</button>
              </div>
            </div>
          </div>

          {questionCard2}


          <div className="form-group mt-2">
            <button
              onClick={() => this.props.previousQuestion(2)}
              className="btn btn-primary mr-4">Pardavimas </button>

            <button
              disabled = {this.props.isFormValid ? false : true }
              onClick={this.props.handleSubmit}
              className="btn btn-primary">
              Skaiciuoti
            </button>
          </div>
        </div>


      );
    } else {
      return false
    }
  }
}

export default questionCard;
