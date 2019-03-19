import moment from 'moment'
import business from 'moment-business';

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

  taxDueDate(sellYear, sellMonth, sellDay){
    // sell is to be declared before [year]-05-01, say 2018-05-01
    // tax is to be paid on [year + 1]-05-01, say 2019-05-01
    // tax due date can be only a work day, so of [year]-05-01 is a holiday,
    // next working day is selected
    // [year-05-01] - is a national holiday in Lithuania
    // FIXME - check if next days are not weekend days

    const sellDate = sellYear+"-"+sellMonth+"-"+sellDay;
    // Some problems with library for this one
    // console.log("business.isWeekDay ? ", business.isWeekDay( "2016-07-25 ") );

    let taxPaymentDate = "";
    if ( moment(sellDate).isBefore(sellYear+'-05-01') ){
      // sale happened before tax report due date, so tax payment is due date is next year;
      taxPaymentDate = (parseInt(sellYear)+1)+'-05-01';
      return taxPaymentDate
    } else {
      // sale happened after tax report due date, so tax payment is due in 2 years;
      taxPaymentDate = (parseInt(sellYear)+2)+'-05-01';
      return taxPaymentDate
    }
  },

  calculateNotaryFee(sellPrice){
    // notary fee : 0.45 procento nuo sumos, bet ne mažiau kaip 28.96 Eur ir ne daugiau kaip 5792.4 Eur
    let notaryFee = (sellPrice * 0.0045).toFixed(2);
    if ( notaryFee < 28.96 ){
      notaryFee = 28.96;
    } else if (notaryFee > 5792.4){
      notaryFee = 5792.4;
    }
    notaryFee = parseFloat(notaryFee, 10);
    return notaryFee;
  }
}

export default helpers;
