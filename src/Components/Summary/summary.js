import React from 'react';
import moment from 'moment'

class Summary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taxDetailsOpen: false
    };
  }

  handleClick(event){
    this.setState({
      taxDetailsOpen: !this.state.taxDetailsOpen
    });
  }

  render() {
    let infoOpen = {
      display: 'none'
    };
    if(this.state.taxDetailsOpen) {
      infoOpen = {
        display: 'block'
      };
    }

    const sellString = this.props.sell.year+"-"+this.props.sell.month+"-"+this.props.sell.day;
    const purchaseString = this.props.purchase.year+"-"+this.props.purchase.month+"-"+this.props.purchase.day;
    let sellDate = moment(sellString).format('DD-MM-YYYY');
    let purchaseDate = moment(purchaseString).format('DD-MM-YYYY');

    if (sellDate === "Invalid date") {
      sellDate = <span className="badge badge-warning"> Netinkama data</span>;
    }

    if (purchaseDate === "Invalid date"){
      purchaseDate = <span className="badge badge-warning"> Netinkama data</span>;
    }

    return (
      <div className="form-group">
        <ul className="list-group">
          <li className="list-group-item">Turtas perėjo nuosavybėn {purchaseDate}</li>
          <li className="list-group-item">Įsigijimo kaina {this.props.purchasePrice} Eur</li>
          <li className="list-group-item">Turtas parduodamas {sellDate}</li>
          <li className="list-group-item">Pardavimo kaina {this.props.sellPrice} Eur</li>
          <li className="list-group-item">Kainų skirtumas {this.props.priceDiff} Eur</li>
          <li className="list-group-item">
            <p>Išlaidos susijusios su turto pardavimu</p>
            <ul>
              <li>
                Notaro mokestis {this.props.notaryFee} Eur
              </li>
              <li>
                Kitos išlaidos {this.props.otherExpenses} Eur
              </li>
            </ul>
          </li>
          <li className="list-group-item">
            <p>GPM (Gyventojų pajamų mokestis) pardavus turtą <strong>{this.props.taxAmount}</strong> Eur</p>
          </li>
          <li className="list-group-item">Pajamų deklaraciją užpildyti iki {this.props.taxReportDueDate}</li>
          <li className="list-group-item">GPM sumokėti iki {this.props.taxDueDate}</li>
        </ul>
      </div>
    );
  }

}

export default Summary;
