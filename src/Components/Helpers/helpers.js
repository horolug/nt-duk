import moment from 'moment'

const helpers = {
  yearRange(){
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 90;
    const maxYear = currentYear + 1;
    let yearRange = [];

    for (  let i = minYear; i < maxYear; i++  ){
      yearRange.push(i);
    }
    return yearRange;
  },

  yearRangeSell( purchaseYear ){
    const maxYear = parseInt(purchaseYear, 10) + 15;
    let yearRangeSell = [];

    for (  let i = purchaseYear; i < maxYear; i++  ){
       yearRangeSell.push(i);
     }

    return yearRangeSell;
  },

  dayRange(year, month){
    const maxDays = moment(year+"-"+month, "YYYY-MM").daysInMonth();
    let dayRange = [];
    for (  let i = 1; i < maxDays; i++  ){
      dayRange.push(i);
    }
    return dayRange;
  },

  calculateNotaryFee( sellPrice ){
     // notary fee : 0.45 procento nuo sumos, bet ne mažiau kaip 28.96 Eur ir ne daugiau kaip 5792.4 Eur
    let notaryFee = sellPrice * 0.0045;
    if ( notaryFee < 28.96 ){
      notaryFee = 28.96;
    } else if (notaryFee > 5792.4){
      notaryFee = 5792.4;
    }
    return notaryFee;
  }


}

export default helpers;
