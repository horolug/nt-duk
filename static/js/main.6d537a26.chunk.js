(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/decision.fd01ea78.svg"},17:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(12),r=a.n(i),l=(a(23),a(24),a(1)),o=a(2),c=a(4),u=a(3),m=a(5),h=a(9),p=a(7),d=a(6),b=a.n(d),v=a(13),y=a.n(v),f={yearRange:function(){for(var e=(new Date).getFullYear(),t=e+1,a=[],n=e-90;n<t;n++)a.push(n);return a},yearRangeSell:function(e){for(var t=parseInt(e,10)+15,a=[],n=e;n<t;n++)a.push(n);return a},dayRange:function(e,t){for(var a=b()(t+"-"+e,"MM-YYYY").daysInMonth(),n=[],s=1;s<a;s++)n.push(s);return n},isTaxRequired:function(e,t,a){return!a&&(!(e>=2&&"primaryDwelling"===t||"primaryDwellingInOneYear"===t)&&(e<10||void 0))},businessDay:function(e){for(var t=b()(e,"YYYY-MM-DD");!y.a.isWeekDay(t);)t=t.add(1,"d");return t.format("YYYY-MM-DD")},taxReportDueDate:function(e){var t=f.businessDay(parseInt(e)+1+"-05-02");return t},taxDueDate:function(e){return f.businessDay(parseInt(e)+2+"-05-02")},calculateNotaryFee:function(e){var t=(.0045*e).toFixed(2);return t<28.96?t=28.96:t>5792.4&&(t=5792.4),t=parseFloat(t,10)},isCardFilled:function(e){for(var t=!0,a=0;a<e.length;a++){var n=parseFloat(e[a],10);isNaN(n)&&(t=!1)}return t},validPrice:function(e){return/^[0-9]+?[.,]?[0-9]*?$/.test(e)?(-1!==e.indexOf(",")||-1!==e.indexOf("."))&&(e=e.replace(",",".")).substring(e.indexOf(".")).length>3?e.slice(0,-1):e:e.slice(0,-1)}},E=f,g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={taxDetailsOpen:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){this.setState({taxDetailsOpen:!this.state.taxDetailsOpen})}},{key:"priceSuffix",value:function(e){return"Mok\u0117ti nereikia"===e?"Mok\u0117ti nereikia":isNaN(e)||""===e?"":e+" Eur"}},{key:"render",value:function(){var e=this.props.sell.year+"-"+this.props.sell.month+"-"+this.props.sell.day,t=this.props.purchase.year+"-"+this.props.purchase.month+"-"+this.props.purchase.day,a=b()(e,"YYYY-MM-DD").format("YYYY-MM-DD"),n=b()(t,"YYYY-MM-DD").format("YYYY-MM-DD");return"Invalid date"===a&&(a=s.a.createElement("span",{className:"badge badge-warning"}," Netinkama data")),"Invalid date"===n&&(n=s.a.createElement("span",{className:"badge badge-warning"}," Netinkama data")),s.a.createElement("div",{className:"form-group"},s.a.createElement("ul",{className:"list-group"},s.a.createElement("li",{className:"list-group-item"},"Turtas per\u0117jo nuosavyb\u0117n ",n),s.a.createElement("li",{className:"list-group-item"},"\u012esigijimo kaina ",this.priceSuffix(this.props.purchasePrice)),s.a.createElement("li",{className:"list-group-item"},"Turtas parduodamas ",a),s.a.createElement("li",{className:"list-group-item"},"Pardavimo kaina ",this.priceSuffix(this.props.sellPrice)),s.a.createElement("li",{className:"list-group-item"},"Kain\u0173 skirtumas ",this.priceSuffix(this.props.priceDiff)),s.a.createElement("li",{className:"list-group-item"},s.a.createElement("p",null,"I\u0161laidos susijusios su turto pardavimu"),s.a.createElement("ul",null,s.a.createElement("li",null,"Notaro mokestis ",this.priceSuffix(this.props.notaryFee)),s.a.createElement("li",null,"Kitos i\u0161laidos ",this.priceSuffix(this.props.otherExpenses)))),s.a.createElement("li",{className:"list-group-item"},s.a.createElement("p",null,"GPM (Gyventoj\u0173 pajam\u0173 mokestis) pardavus turt\u0105 ",s.a.createElement("strong",null," ",this.priceSuffix(this.props.taxAmount)))),s.a.createElement("li",{className:"list-group-item"},"Pajam\u0173 deklaracij\u0105 u\u017epildyti iki ",this.props.taxReportDueDate)))}}]),t}(s.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t="",a="btn-light btn mr-2",n="";"primaryDwellingShort"===this.props.dwellingStatus&&(n=s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{onClick:this.props.nextQuestion,className:"btn btn-primary mt-2"},"Kitas klausimas "))),this.props.primaryDwelling&&(a="btn-secondary btn mr-2",t=s.a.createElement("div",{className:"mt-4"},s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",id:"primaryDwellingShort",name:"dwellingOption",type:"radio",value:"",onChange:function(t){return e.props.onChange(t)}}),s.a.createElement("label",{className:"form-check-label",htmlFor:"primaryDwellingShort"},"Trumpiau nei 2 metai")),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",id:"primaryDwelling",name:"dwellingOption",type:"radio",value:"",onChange:function(t){return e.props.onChange(t)}}),s.a.createElement("label",{className:"form-check-label",htmlFor:"primaryDwelling"},"Ilgiau nei 2 metai"))));var i=s.a.createElement("div",{className:"card-body"},s.a.createElement("label",{className:"form-check-label",htmlFor:"primaryDwelling"},"Ar parduodamame turte deklaruota j\u016bs\u0173 gyvenamoji vieta?"),s.a.createElement("div",{className:"mt-4"},s.a.createElement("button",{id:"isPrimaryDwelling",onClick:function(t){return e.props.onClick(t)},className:a},"Taip"),s.a.createElement("button",{id:"notPrimaryDwelling",onClick:function(t){return e.props.onClick(t)},className:"btn btn-light"},"Ne")),t,n);return 4===this.props.isVisible?s.a.createElement("div",{className:"mb-2"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"}," Deklaruota gyvenamoji vieta "),i)):s.a.createElement("div",{className:"mb-2"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header",onClick:function(){return e.props.jumpToQuestion(4)}},s.a.createElement("button",{className:"btn btn-link"}," Deklaruota gyvenamoji vieta "))))}}]),t}(s.a.Component),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col form-group"},s.a.createElement("select",{onChange:this.props.onChange,name:this.props.blockType+"Year",className:"form-control form-control-md",value:this.props.selectedDate.year},this.props.years)),s.a.createElement("div",{className:"col form-group"},s.a.createElement("select",{onChange:this.props.onChange,name:this.props.blockType+"Month",className:"form-control form-control-md",value:this.props.selectedDate.month},s.a.createElement("option",{value:"0"},"Menuo"),this.props.months)),s.a.createElement("div",{className:"col form-group"},s.a.createElement("select",{onChange:this.props.onChange,name:this.props.blockType+"Day",className:"form-control form-control-md",value:this.props.selectedDate.day},s.a.createElement("option",{value:"0"},"Diena"),this.props.days)))}}]),t}(s.a.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("p",null,"Data"),s.a.createElement(N,{blockType:"purchase",onChange:this.props.dateChange,selectedDate:this.props.selectedDate,years:this.props.years,months:this.props.months,days:this.props.days}),s.a.createElement("p",null,"Kaina, Eur"),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"purchasePrice",value:this.props.price,onChange:this.props.handlePrice,className:"form-control"})))),s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{onClick:this.props.nextQuestion,className:"btn btn-primary"},"Kitas klausimas ")));return 1===this.props.isVisible?s.a.createElement("div",{className:"card mb-2"},s.a.createElement("div",{className:"card-header"},"Pirkimas"),t):s.a.createElement("div",{className:"card mb-2"},s.a.createElement("div",{className:"card-header",onClick:function(){return e.props.jumpToQuestion(1)}},s.a.createElement("button",{className:"btn btn-link"},"Pirkimas")))}}]),t}(s.a.Component),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={expensesOpen:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){this.setState({expensesOpen:!this.state.expensesOpen})}},{key:"render",value:function(){var e=this,t={display:"none"};this.state.expensesOpen&&(t={display:"block"});var a=this.state.expensesOpen?"slepti":"rodyti daugiau",n=s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("p",null," Data "),s.a.createElement(N,{blockType:"sell",onChange:this.props.dateChange,selectedDate:this.props.selectedDate,years:this.props.years,months:this.props.months,days:this.props.days}),s.a.createElement("p",null,"Kaina, Eur"),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"sellPrice",value:this.props.price,onChange:this.props.handlePrice,className:"form-control"})))),s.a.createElement("div",{className:"form-group"},s.a.createElement("p",null," Notaro mokestis ",s.a.createElement("span",{className:"badge badge-primary"},this.props.notaryFee," Eur")," "),s.a.createElement("p",null,"Sumok\u0117jote kitok\u012f notaro mok\u0117st\u012f? \u012eveskite:"),s.a.createElement("input",{type:"number",name:"purchasePrice",value:this.props.customNotaryFee,onChange:function(t){return e.props.handleNotaryFee(t)},className:"form-control"})),s.a.createElement("button",{onClick:function(t){return e.handleClick(t)},"data-target":"expensesOpen",className:"btn btn-info btn-sm",type:"button"},a),s.a.createElement("div",{className:"form-group mt-4",style:t},s.a.createElement("label",null,s.a.createElement("strong",null,"Notaro mokestis")),s.a.createElement("p",null,"Notaro mokestis: 0.45% nuo pardavimo sumos, bet ne ma\u017eiau kaip 28.96 Eur ir ne daugiau kaip 5792.40 Eur."),s.a.createElement("p",null,"Automati\u0161kai paskai\u010diuota suma yra ",this.props.notaryFee," Eur.")),s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{onClick:this.props.nextQuestion,className:"btn btn-primary"},"Kitas klausimas ")));return 2===this.props.isVisible?s.a.createElement("div",{className:"card mb-2"},s.a.createElement("div",{className:"card-header"}," Pardavimas "),n):s.a.createElement("div",{className:"card mb-2",onClick:function(){return e.props.jumpToQuestion(2)}},s.a.createElement("div",{className:"card-header"},s.a.createElement("button",{className:"btn btn-link"}," Pardavimas ")))}}]),t}(s.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=s.a.createElement("div",{className:"card-body"},s.a.createElement("label",null,s.a.createElement("strong",null,"Kitos i\u0161laidos")),s.a.createElement("p",null,"Ar tur\u0117jote kit\u0173 i\u0161laid\u0173 skirt\u0173 padidinti turto vert\u0119, pvz, i\u0161laid\u0173 remontui?"),s.a.createElement("p",null,"Vis\u0173 i\u0161laid\u0173 suma, Eur:"),s.a.createElement("input",{type:"number",name:"purchasePrice",value:this.props.otherExpenses,onChange:function(t){return e.props.handleOtherExpenses(t)},className:"form-control"}),s.a.createElement("p",{className:"mt-4"},"Svarbu: i\u0161laidos turi b\u016bti pagr\u012fstos dokumentais (vardiniais \u010dekiais ir pan.)"),s.a.createElement("p",null,"Svarbu: Jeigu turto vert\u0117s didinimui buvo panaudota paskola, sumok\u0117tos pal\u016bkanos negali b\u016bti \u012ftrauktos \u012f i\u0161laidas."),s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{onClick:this.props.nextQuestion,className:"btn btn-primary"},"Kitas klausimas ")));return 3===this.props.isVisible?s.a.createElement("div",{className:"card mb-2"},s.a.createElement("div",{className:"card-header"}," Kitos I\u0161laidos "),t):s.a.createElement("div",{className:"card mb-2"},s.a.createElement("div",{onClick:function(){return e.props.jumpToQuestion(3)},className:"card-header"},s.a.createElement("button",{className:"btn btn-link"}," Kitos I\u0161laidos ")))}}]),t}(s.a.Component),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={newPurchase:!1,purchaseInOneYear:!1,newPrimaryDwelling:!1,newDwelling:"btn-light btn",noNewDwelling:"btn-light btn ml-2",inOneYear:"btn-light btn",notInOneYear:"btn-light btn ml-2",newPrimary:"btn-light btn",noNewPrimary:"btn-light btn ml-2"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"newDwellingPurchase",value:function(e){e.preventDefault(),"newDwelling"===e.target.id?this.setState({newPurchase:!0}):this.setState({purchaseInOneYear:!1,newPurchase:!1,newPrimaryDwelling:!1})}},{key:"taxExemption",value:function(){return!!this.state.newPrimaryDwelling}},{key:"purchaseWithinYear",value:function(e){e.preventDefault();var t=!1;console.log("purchaseWithinYear called"),"inOneYear"===e.target.id&&(t=!0),this.setState({purchaseInOneYear:t})}},{key:"newPrimaryDwelling",value:function(e){e.preventDefault();var t=!1;"newPrimary"===e.target.id&&(t=!0),this.setState({newPrimaryDwelling:t})}},{key:"handleClick",value:function(e){e.preventDefault();var t="btn-secondary btn ml-2",a="btn-light btn ml-2";"newDwelling"===e.target.id&&(this.newDwellingPurchase(e),this.setState({newDwelling:"btn-secondary btn",noNewDwelling:a})),"noNewDwelling"===e.target.id&&(this.newDwellingPurchase(e),this.setState({newDwelling:"btn-light btn",noNewDwelling:t})),"inOneYear"===e.target.id&&(this.purchaseWithinYear(e),this.setState({inOneYear:"btn-secondary btn",notInOneYear:a})),"notInOneYear"===e.target.id&&(this.purchaseWithinYear(e),this.setState({inOneYear:"btn-light btn",notInOneYear:t})),"newPrimary"===e.target.id&&(this.props.taxExemption("true"),this.setState({newPrimary:"btn-secondary btn",noNewPrimary:a})),"noNewPrimary"===e.target.id&&this.setState({newPrimary:"btn-light btn",noNewPrimary:t})}},{key:"render",value:function(){var e=this,t=parseInt(this.props.sellDate.year,10)+1+"-"+this.props.sellDate.month+"-"+this.props.sellDate.day,a=b()(t,"YYYY-MM-DD").format("YYYY-MM-DD"),n=s.a.createElement("div",{className:"mt-4"},s.a.createElement("p",null,"Ar naujas b\u016bstas bus perkamas iki ",a),s.a.createElement("button",{id:"inOneYear",onClick:function(t){return e.handleClick(t)},className:this.state.inOneYear},"Taip"),s.a.createElement("button",{id:"notInOneYear",onClick:function(t){return e.handleClick(t)},className:this.state.notInOneYear},"Ne")),i=s.a.createElement("div",{className:"mt-4"},s.a.createElement("p",null,"Ar naujai perkamame b\u016bste bus deklaruota gyvenamoji vieta iki ",a),s.a.createElement("button",{id:"newPrimary",onClick:function(t){return e.handleClick(t)},className:this.state.newPrimary},"Taip"),s.a.createElement("button",{id:"noNewPrimary",onClick:function(t){return e.handleClick(t)},className:this.state.noNewPrimary},"Ne")),r=s.a.createElement("div",{className:"card-body"},s.a.createElement("p",null,"Pardavus b\u016bst\u0105 kur buvo deklaruota gyvenamoji vieta perkamas kitas b\u016bstas?"),s.a.createElement("div",{className:"mt-4"},s.a.createElement("button",{id:"newDwelling",onClick:function(t){return e.handleClick(t)},className:this.state.newDwelling},"Taip"),s.a.createElement("button",{id:"noNewDwelling",onClick:function(t){return e.handleClick(t)},className:this.state.noNewDwelling},"Ne")),this.state.newPurchase?n:"",this.state.purchaseInOneYear?i:"");return 5===this.props.isVisible?s.a.createElement("div",{className:"mb-2"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},"Kito B\u016bsto pirkimas "),r)):s.a.createElement("div",{className:"mb-2"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{onClick:function(){return e.props.jumpToQuestion(5)},className:"card-header"},s.a.createElement("button",{className:"btn btn-link"},"Kito B\u016bsto pirkimas"))))}}]),t}(s.a.Component),j=a(14),Y=a.n(j),P=(s.a.Component,function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.handleNewPurchase=function(e){console.log("taxExemption",e),a.setState({taxExemption:e})},a.jumpToQuestion=function(e){a.setState({questionStep:e})},a.state={width:window.innerWidth,showSummaryOnMobile:!1,sellYear:(new Date).getFullYear()+1,sellMonth:1,sellDay:1,sellPrice:"",purchaseYear:(new Date).getFullYear(),purchaseMonth:1,purchaseDay:1,purchasePrice:"",primaryDwelling:!1,dwellingStatus:"",taxExemption:!1,yearRange:E.yearRange(),monthRange:[1,2,3,4,5,6,7,8,9,10,11,12],currentYear:(new Date).getFullYear(),timeDiff:"",priceDiff:"",taxAmount:"Mok\u0117ti nereikia",notaryFee:"",otherExpenses:"",customNotaryFee:"",taxDueDate:"",taxReportDueDate:"",isFormValid:!1,questionStep:1},a.handleDate=a.handleDate.bind(Object(p.a)(a)),a.handlePrice=a.handlePrice.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.handleOptions=a.handleOptions.bind(Object(p.a)(a)),a.handleNotaryFee=a.handleNotaryFee.bind(Object(p.a)(a)),a.handleNewPurchase=a.handleNewPurchase.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"calculateTax",value:function(e,t){var a=E.isTaxRequired(e,this.state.dwellingStatus,this.state.taxExemption),n=this.state.sellPrice-this.state.purchasePrice;n=n.toFixed(2);var s="Mok\u0117ti nereikia",i="",r="";""===this.state.customNotaryFee?(i=E.calculateNotaryFee(this.state.sellPrice),i=parseFloat(i).toFixed(2)):i=this.state.customNotaryFee,r=""===this.state.otherExpenses?parseFloat(i):parseFloat(i)+parseFloat(this.state.otherExpenses),a&&parseFloat(n)>parseFloat(r)&&(s=.15*(n-r),s=E.validPrice(s)),this.setState({taxAmount:s,priceDiff:E.validPrice(n),notaryFee:E.validPrice(i),timeDiff:e,taxDueDate:E.taxDueDate(this.state.sellYear),taxReportDueDate:E.taxReportDueDate(this.state.sellYear),isFormValid:t})}},{key:"timeDiff",value:function(){var e=this.state.purchaseYear+"-"+this.state.purchaseMonth+"-"+this.state.purchaseDay,t=this.state.sellYear+"-"+this.state.sellMonth+"-"+this.state.sellDay,a=b()(e,"YYYY-MM-DD");return b()(t,"YYYY-MM-DD").diff(a,"years")}},{key:"handleDate",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleQuestionCard",value:function(e){this.setState({dwellingStatus:e.target.id})}},{key:"handleQuestionButton",value:function(e){e.preventDefault();var t=!1;"isPrimaryDwelling"===e.target.id&&(t=!0),!1===t?this.setState({primaryDwelling:t,dwellingStatus:""}):this.setState({primaryDwelling:t})}},{key:"handleOptions",value:function(e){e.preventDefault(),this.setState({dwellingStatus:e.target.id})}},{key:"handlePrice",value:function(e){this.setState(Object(h.a)({},e.target.name,E.validPrice(e.target.value)))}},{key:"handleNotaryFee",value:function(e){this.setState({customNotaryFee:E.validPrice(e.target.value)})}},{key:"handleOtherExpenses",value:function(e){this.setState({otherExpenses:E.validPrice(e.target.value)})}},{key:"flipQuestionCard",value:function(e){e.preventDefault();var t=this.state.questionStep,a=1,n=[this.state.purchaseYear,this.state.purchaseMonth,this.state.purchaseDay,this.state.purchasePrice],s=[this.state.sellYear,this.state.sellMonth,this.state.sellDay,this.state.sellPrice],i=E.isCardFilled(n),r=E.isCardFilled(s);!0===i&&(a=2,!0===r&&(a=3,3===t&&(a=4),"primaryDwellingShort"===this.state.dwellingStatus&&(a=5))),this.setState({questionStep:a})}},{key:"isFormValid",value:function(){var e=[this.state.sellYear,this.state.sellMonth,this.state.sellDay,this.state.sellPrice,this.state.purchaseYear,this.state.purchaseMonth,this.state.purchaseDay,this.state.purchasePrice];!0===this.state.primaryDwelling&&e.push(this.state.dwellingStatus);for(var t=!0,a=0;a<e.length;a++)e[a].length<=0&&(t=!1);return t}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.isFormValid()&&(this.calculateTax(this.timeDiff(),this.isFormValid()),this.setState({showSummaryOnMobile:!0}))}},{key:"render",value:function(){var e=this,t=E.dayRange(this.state.purchaseYear,this.state.purchaseMonth),a=E.dayRange(this.state.sellYear,this.state.sellMonth),n={year:this.state.purchaseYear,month:this.state.purchaseMonth,day:this.state.purchaseDay},i={year:this.state.sellYear,month:this.state.sellMonth,day:this.state.sellDay},r=this.state.width<768,l="";this.timeDiff()>=2&&(l=s.a.createElement(k,{isVisible:this.state.questionStep,onChange:function(t){return e.handleQuestionCard(t)},onClick:function(t){return e.handleQuestionButton(t)},primaryDwelling:this.state.primaryDwelling,dwellingStatus:this.state.dwellingStatus,nextQuestion:function(t){return e.flipQuestionCard(t)},jumpToQuestion:this.jumpToQuestion}));var o="";r&&!this.state.showSummaryOnMobile||(o=s.a.createElement("div",{className:"col-sm-12 col-md-6"},s.a.createElement(g,{purchase:n,sell:i,purchasePrice:this.state.purchasePrice,sellPrice:this.state.sellPrice,timeDiff:this.state.timeDiff,priceDiff:this.state.priceDiff,notaryFee:this.state.notaryFee,customNotaryFee:this.state.customNotaryFee,otherExpenses:this.state.otherExpenses,taxAmount:this.state.taxAmount,taxDueDate:this.state.taxDueDate,taxReportDueDate:this.state.taxReportDueDate})));var c="";return"primaryDwellingShort"===this.state.dwellingStatus&&(c=s.a.createElement(x,{isVisible:this.state.questionStep,sellDate:i,taxExemption:this.handleNewPurchase,jumpToQuestion:this.jumpToQuestion})),s.a.createElement("form",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 col-md-6"},s.a.createElement(D,{isVisible:this.state.questionStep,dateChange:this.handleDate,selectedDate:n,years:E.yearRange().map(function(e,t){return s.a.createElement("option",{key:e,value:e},e)}),months:this.state.monthRange.map(function(e,t){return s.a.createElement("option",{key:e,value:e},e)}),days:t.map(function(e){return s.a.createElement("option",{key:e,value:e},e)}),handlePrice:this.handlePrice,nextQuestion:function(t){return e.flipQuestionCard(t)},jumpToQuestion:this.jumpToQuestion,price:this.state.purchasePrice}),s.a.createElement(w,{isVisible:this.state.questionStep,dateChange:this.handleDate,year:this.state.sellYear,years:E.yearRangeSell(this.state.purchaseYear).map(function(e,t){return s.a.createElement("option",{key:e,value:e},e)}),months:this.state.monthRange.map(function(e,t){return s.a.createElement("option",{key:e,value:e},e)}),days:a.map(function(e){return s.a.createElement("option",{key:e,value:e},e)}),handleNotaryFee:function(t){return e.handleNotaryFee(t)},customNotaryFee:this.state.customNotaryFee,handlePrice:this.handlePrice,notaryFee:E.calculateNotaryFee(this.state.sellPrice),nextQuestion:function(t){return e.flipQuestionCard(t)},jumpToQuestion:this.jumpToQuestion,price:this.state.sellPrice,selectedDate:i}),s.a.createElement(O,{isVisible:this.state.questionStep,handleOtherExpenses:function(t){return e.handleOtherExpenses(t)},nextQuestion:function(t){return e.flipQuestionCard(t)},otherExpenses:this.state.otherExpenses,jumpToQuestion:this.jumpToQuestion,notaryFee:E.calculateNotaryFee(this.state.sellPrice)}),l,c,s.a.createElement("div",{className:"mt-4 mb-4 text-center"},s.a.createElement("button",{disabled:!this.isFormValid(),onClick:this.handleSubmit,className:"btn btn-primary"},"Skai\u010diuoti"))),o))}}]),t}(s.a.Component)),C=a(15),S=a.n(C),F=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"mb-4 pb-2 pt-2"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"d-block text-center"}," Paskai\u010diuok "),s.a.createElement("p",{className:"lead text-center"},"\u012erankis skirtas GPM skai\u010diavimui parduodant nekilnojam\u0105 turt\u0105"))),s.a.createElement("div",{className:"container"},s.a.createElement(P,null),s.a.createElement("div",{className:"border p-2 rounded-sm mt-4"},s.a.createElement(S.a.DiscussionEmbed,{shortname:"paskaiciuok"}))),s.a.createElement("footer",{className:"mt-4 pt-4 pb-2"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("p",null,"Visi skai\u010diavimai yra tik informacinio pob\u016bd\u017eio. Jeigu kyla papildom\u0173 klausim\u0173 d\u0117l mok\u0117s\u010di\u0173 mok\u0117jimo rekomenduojame kreiptis pas mok\u0117s\u010di\u0173 apskaitos profesionalus.")),s.a.createElement("div",{className:"col text-right"},s.a.createElement("p",null,"Autorius Aleksandr Gulbickij"),s.a.createElement("p",null,"Visos teis\u0117s saugomos"))))))}}]),t}(n.Component),M=a(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));M.a.initialize("UA-138714951-1"),r.a.render(s.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.6d537a26.chunk.js.map