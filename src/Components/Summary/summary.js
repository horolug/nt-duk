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

  priceSuffix( price ){
    const suffix = ' Eur';
    if ( price === "Mokėti nereikia" ){
      return "Mokėti nereikia"
    } else if ( isNaN(price) || price === '' ){
      return "";
    }

    return price + suffix;
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
    let sellDate = moment(sellString).format('YYYY-MM-DD');
    let purchaseDate = moment(purchaseString).format('YYYY-MM-DD');
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
          <li className="list-group-item">Įsigijimo kaina {this.priceSuffix( this.props.purchasePrice )}</li>
          <li className="list-group-item">Turtas parduodamas {sellDate}</li>
          <li className="list-group-item">Pardavimo kaina {this.priceSuffix(this.props.sellPrice)}</li>
          <li className="list-group-item">Kainų skirtumas {this.priceSuffix(this.props.priceDiff)}</li>
          <li className="list-group-item">
            <p>Išlaidos susijusios su turto pardavimu</p>
            <ul>
              <li>
                Notaro mokestis {this.priceSuffix(this.props.notaryFee)}
              </li>
              <li>
                Kitos išlaidos {this.priceSuffix(this.props.otherExpenses)}
              </li>
            </ul>
          </li>
          <li className="list-group-item">
            <p>GPM (Gyventojų pajamų mokestis) pardavus turtą <strong> {this.priceSuffix(this.props.taxAmount)}</strong></p>
          </li>
          <li className="list-group-item">Pajamų deklaraciją užpildyti iki {this.props.taxReportDueDate}</li>
          <li className="list-group-item">GPM sumokėti iki {this.props.taxDueDate}</li>
        </ul>
      </div>
    );
  }

}

export default Summary;
