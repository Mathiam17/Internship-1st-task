new Vue ({
    el: "#Menu",
    data: {
        Currencies: [
            {Text:'EUR', id: 'Eur', checkbox_id: 'CheckEUR', isActive: true, checked: false, seen: false},
            {Text:'PLN', id: 'Pln', checkbox_id: 'CheckPLN', isActive: true, checked: false, seen: false},
            {Text:'GEL', id: 'Gel', checkbox_id: 'CheckGEL', isActive: true, checked: false, seen: false},
            {Text:'DKK', id: 'Dkk', checkbox_id: 'CheckDKK', isActive: true, checked: false, seen: false},
            {Text:'CZK', id: 'Czk', checkbox_id: 'CheckCZK', isActive: true, checked: false, seen: false},
            {Text:'GBP', id: 'Gbp', checkbox_id: 'CheckGBP', isActive: true, checked: false, seen: false},
            {Text:'SEK', id: 'Sek', checkbox_id: 'CheckSEK', isActive: true, checked: false, seen: false},
            {Text:'USD', id: 'Usd', checkbox_id: 'CheckUSD', isActive: true, checked: false, seen: false},
            {Text:'RUB', id: 'Rub', checkbox_id: 'CheckRUB', isActive: true, checked: false, seen: false}
        ],
        selectedCurrencies: []
    },
    methods: {    
        toggleClass(Currency){
            // Here you can use Conditional (ternary) operator
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
            if(Currency.isActive){
                Currency.isActive = false;
            }else{
                Currency.isActive = true;
            } 
        },
        // Is this reallay a Checkbox what the functions receives as argument?
        toggleCheckBox(Checkbox) {	// Funkcija kas maina checkboxa statusu uz izveletu vai neizveletu
            // Is it possible to shorten the check and and avoid the comparison of `== false`?
            // What's the difference between `==` and `===`? // Is this reallay a Checkbox what the functions receives as argument?
            if (Checkbox.checked == false) {
                Checkbox.checked = true;
            } else {
                Checkbox.checked = false;
            }
        },
        showHiddenBox(Currency) {
            Currency.seen = !Currency.seen
        }
    }
})
