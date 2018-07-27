var request = require('request');
var Converter = require('./module/module.js');

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var obj = JSON.parse(body);

        var val = function (val1,val2) {
            var baseCurrency = 0;
            if (val1 === "UAH" && val2 === "USD") {
                baseCurrency = Number(obj[0].sale);
            }
            else if (val1 === "USD" && val2 === "UAH") {
                baseCurrency = Number(obj[0].buy);
            }
            else if (val1 === "UAH" && val2 === "EUR") {
                baseCurrency = Number(obj[1].sale);
            }
            else if (val1 === "EUR" && val2 === "UAH") {
                baseCurrency = Number(obj[1].buy);
            }
            else if (val1 === "UAH" && val2 === "RUS") {
                baseCurrency = Number(obj[2].sale);
            }
            else if (val1 === "RUS" && val2 === "UAH") {
                baseCurrency = Number(obj[2].buy);
            }
            return baseCurrency;
        };
        var conv = new Converter();
        conv.UAH_USD(100, val("UAH","USD"));
        conv.USD_UAH(100, val("USD","UAH"));
        conv.UAH_EUR(100, val("UAH","EUR"));
        conv.EUR_UAH(100, val("EUR","UAH"));
        conv.UAH_RUS(100, val("UAH","RUS"));
        conv.RUS_UAH(100, val("RUS","UAH"));

        // console.log("UAH_USD: " + cash / baseCurrency[0].sale);
        //данные для вывода можно посмотреть на сайте https://api.privatbank.ua/#p24/exchange
    } else {
        console.warn(error);
    }
});





