import React from 'react';

class questionCard extends React.Component {

  constructor(props) {
    super(props);
  }

  displayOption(){
    // calculations are made based on dwellingStatus and duration of the status
    // selection to be passed to parent form
    // q1. ar deklaruota gyvenimo vieta?
    // q1.1 [yes] - ar daugiau nei 2 metus deklaruota ?
  }

  render() {
    let questionCard2 = "";
    if ( this.props.primaryDwelling){
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

    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="form-check">
              <input className="form-check-input"
                id="primaryDwelling"
                name="dwelling"
                type="checkbox"
                value=""
                onChange={(e)=>this.props.onChange(e)}
              />
              <label className="form-check-label" htmlFor="primaryDwelling">
                Ar parduodamas turtas - deklaruota gyvenimo vieta
              </label>
            </div>
          </div>
        </div>

        {questionCard2}
      </div>
    );
  }
}

export default questionCard;
