var request = require('request');

var Converter = function () {
};

Converter.prototype.roundTwoDecimal = function(amound) {
	return Math.round(amound *100)/100;
};

Converter.prototype.UAH_USD = function (cash, kurs) {
    // return this.roundTwoDecimal(cash / kurs);
    console.log("За " + cash + "грн сегодня можно преобрести " + this.roundTwoDecimal(cash / kurs) + "$");
};

Converter.prototype.USD_UAH = function (cash, kurs) {
    // return this.roundTwoDecimal(cash * kurs);
    console.log("За " + cash + "$ сегодня можно преобрести " + this.roundTwoDecimal(cash * kurs) + "грн");
};

Converter.prototype.UAH_EUR = function (cash, kurs) {
    // return this.roundTwoDecimal(cash / kurs);
    console.log("За " + cash + "грн сегодня можно преобрести " + this.roundTwoDecimal(cash / kurs) + "евро");
};

Converter.prototype.EUR_UAH = function (cash, kurs) {
    // return this.roundTwoDecimal(cash * kurs);
    console.log("За " + cash + "евро сегодня можно преобрести " + this.roundTwoDecimal(cash * kurs) + "грн");
};

Converter.prototype.UAH_RUS = function (cash, kurs) {
    // return this.roundTwoDecimal(cash / kurs);
    console.log("За " + cash + "грн сегодня можно преобрести " + this.roundTwoDecimal(cash / kurs) + "рублей");
};

Converter.prototype.RUS_UAH = function (cash, kurs) {
    // return this.roundTwoDecimal(cash * kurs);
    console.log("За " + cash + "рублей сегодня можно преобрести " + this.roundTwoDecimal(cash * kurs) + "грн");
};

module.exports = Converter;