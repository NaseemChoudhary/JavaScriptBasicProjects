const selectIn = document.getElementById("CurrencyIN");
const selectOut = document.getElementById("CurrencyOut");
const inputAmount = document.getElementById("Amount")
const bttn = document.getElementById("convertbttn");
const output = document.getElementById("Output");

let currencyRates = {};
        

async function updateUI() {
    try{
        const res = await fetch(`https://openexchangerates.org/api/currencies.json`)
        const data = await res.json();
        
        for (let i in data){
            const name = data[i];
            
            const option1 = document.createElement("option");
            option1.textContent = `${i} - ${name}`;
            option1.value = i;

            const option2 = document.createElement("option");
            option2.textContent = `${i} - ${name}`;
            option2.value = i;

            selectIn.appendChild(option1);
            selectOut.appendChild(option2);
        }
        selectIn.value = "USD";
        selectOut.value = "INR";       
        const api = "https://open.er-api.com/v6/latest/USD";
        const currencyres = await fetch(api);
        const currencydata = await currencyres.json();
        currencyRates = currencydata.rates
        
    }
    catch(error){
        console.error(error);
    }
}


function ChangeCurrency(from, to) {
    const Amount = Number(inputAmount.value);
    const ConvertedAmount = (Amount / currencyRates[from]) * currencyRates[to];
    return ConvertedAmount;
}

bttn.addEventListener("click", ()=>{
    try{
        if (!inputAmount.value) {
            output.textContent = "Enter an amount";
            return;
        }

        const Amount = ChangeCurrency(selectIn.value, selectOut.value);
        output.style.display = "block"
        output.textContent = `${inputAmount.value} ${selectIn.value} = ${Amount.toFixed(2)} ${selectOut.value}`;;
    }
    catch(error){
        console.error(error);
    }
});

document.addEventListener("DOMContentLoaded", updateUI);
