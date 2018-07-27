var request = require('request');

var Converter = function () {
};

Converter.prototype.roundTwoDecimal = function(amound) {
	return Math.round(amound *100)/100;
};

Converter.prototype.UAH_USD = function (cash) {
    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var baseCurrency = JSON.parse(body);
            console.log("UAH_USD: " + cash / baseCurrency[0].sale);
            //данные для вывода можно посмотреть на сайте https://api.privatbank.ua/#p24/exchange
        } else {
            console.warn(error);
        }
    });
};

Converter.prototype.USD_UAH = function (cash) {
    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var baseCurrency = JSON.parse(body);
            console.log("USD_UAH: " + baseCurrency[0].buy * cash);
            //данные для вывода можно посмотреть на сайте https://api.privatbank.ua/#p24/exchange
        } else {
            console.warn(error);
        }
    });
};

Converter.prototype.UAH_EUR = function (cash) {
    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var baseCurrency = JSON.parse(body);
            console.log("UAH_EUR: " + cash / baseCurrency[1].sale);
            //данные для вывода можно посмотреть на сайте https://api.privatbank.ua/#p24/exchange
        } else {
            console.warn(error);
        }
    });
};

Converter.prototype.EUR_UAH = function (cash) {
    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var baseCurrency = JSON.parse(body);
            console.log("EUR_UAH: " + cash * baseCurrency[1].buy);
            //данные для вывода можно посмотреть на сайте https://api.privatbank.ua/#p24/exchange
        } else {
            console.warn(error);
        }
    });
};

Converter.prototype.UAH_RUS = function (cash) {
    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var baseCurrency = JSON.parse(body);
            console.log("UAH_RUS: " + cash / baseCurrency[2].sale);
            //данные для вывода можно посмотреть на сайте https://api.privatbank.ua/#p24/exchange
        } else {
            console.warn(error);
        }
    });
};

Converter.prototype.RUS_UAH = function (cash) {
    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var baseCurrency = JSON.parse(body);
            console.log("RUS_UAH: " + baseCurrency[2].buy * cash);
            //данные для вывода можно посмотреть на сайте https://api.privatbank.ua/#p24/exchange
        } else {
            console.warn(error);
        }
    });
};

module.exports = Converter;