import React from 'react';

class Summary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="form-group">
        <ul className="list-group">
          <li className="list-group-item">Turtas perejo i nusavybe {this.props.purchaseDate}</li>
          <li className="list-group-item">Isigijimo kaina {this.props.purchasePrice}</li>
          <li className="list-group-item">Turtas parduodamas {this.props.sellDate}</li>
          <li className="list-group-item">Pardavimo kaina {this.props.sellPrice}</li>
          <li className="list-group-item">Laiko skirtumas metais {this.props.timeDiff}</li>
          <li className="list-group-item">Kainu skirtumas {this.props.priceDiff}</li>
          <li className="list-group-item">
            <p>Islaidos susijusios su turto pardavimu</p>
            <ul>
              <li>Notaro mokestis {this.props.notaryFee}</li>
            </ul>
          </li>
          <li className="list-group-item">
            <p>Pelno mokestis pardavus turta <strong>{this.props.taxAmount}</strong> </p>

            <div className="card border-dark mb-3">
              <div className="card-header">Svarbu zinoti</div>
              <div className="card-body text-dark">
                <h5 className="card-title">Deklaruota gyvenimo vieta</h5>
                <p className="card-text">Jeigu ( visi punktai turi atitikti )</p>
                <ol>
                  <li>parduodamas bustas perejo jums i nuosavybe
                  daugiau negu pries du metus</li>
                  <li>daugiau kaip du paskutinius metus deklaruota gyvenimo
                  vieta buvo nurodyta parduodamo busto adresu</li>
                </ol>
                <p className="card-text">Pelno mokescio uz busto pardavima moketi neprivalote</p>
                <h5 className="card-title">Kito busto pirkimas</h5>
                <p className="card-text">Jeigu ( visi punktai turi atitikti )</p>
                <ol>
                  <li>paskutine deklaruota gyvenimo
                  vieta buvo nurodyta parduodamo busto adresu</li>
                  <li>per metus nuo minimo busto pardavimo datos nupirktas kitas bustas,
                  ir jame deklaruota gyvenimo vieta</li>
                </ol>
                <p className="card-text">Pelno mokescio uz busto pardavima moketi neprivalote</p>

              </div>
            </div>
          </li>
          <li className="list-group-item">Pajamu deklaracija uzpildyti iki {this.props.taxReportDueDate}</li>
          <li className="list-group-item">Pelno mokesti sumoketi iki {this.props.taxDueDate}</li>
        </ul>
      </div>
    );
  }

}

export default Summary;
