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

  isTaxRequired (timeDiff, dwellingStatus){
    // 1. Income tax (15%) is due if sell happened less than 10 years after purchaseDay
    // 2. Income tax is not required if ( all conditions must apply ):
    // 2.1 sold property was primary dwelling for less than 2 years
    // 2.2 sell happened less than 10 years after purchase
    // 2.3 money was used to buy another primary dwelling within a year of selling the first one
    // 3. Income tax is not requried if:
    // 3.1 sold property was primary dwelling for more than 2 years

    if ( (timeDiff >= 2)  && (dwellingStatus === "primaryDwelling") ){
      console.log("got primary dwelling, no taxes");
      return false;
    } else if ( timeDiff < 10 ){
      return true;
    }
  },

  taxReportDueDate(sellYear, sellMonth, sellDay){
    const sellDate = sellYear+"-"+sellMonth+"-"+sellDay;
    let taxReportDueDate = "";
    if ( moment(sellDate).isBefore(sellYear+'-05-01') ){
      taxReportDueDate = sellYear+'-05-01';
    } else {
      // sale happened after tax report due date, so tax payment is due in 2 years;
      taxReportDueDate = (parseInt(sellYear)+1)+'-05-01';
    }

    return taxReportDueDate;
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
  },

  isCardFilled( card ){
    let cardFilled = true;
    for( let i = 0; i < card.length; i++ ){
      const numberInQuestion = parseFloat(card[i], 10);
      if ( isNaN(numberInQuestion)  ) {
        cardFilled = false;
      }
    }

    return cardFilled;
  }
}

export default helpers;
