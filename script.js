async function getQuotes() {
   let response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
   if(response.ok){
    let jsonResponse = await response.text();
    let quoteUSD = JSON.parse(jsonResponse).Valute['USD'];
    let quoteEUR = JSON.parse(jsonResponse).Valute['EUR'];
    console.log(quoteUSD);
    console.log(quoteEUR);
    var usdElement = document.getElementsByClassName('usdQuote')[0];
    usdElement.textContent = quoteUSD.Value.toFixed(2);

    var eurElement = document.getElementsByClassName('eurQuote')[0];
    eurElement.textContent = quoteEUR.Value.toFixed(2);
   }
}