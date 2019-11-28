new Vue ({
    el: "#Menu",
    data: {
        Currencies: [
            {Text:'EUR', id: 'Eur', checkbox_id: 'CheckEUR', isActive: false, checked: false},
            {Text:'PLN', id: 'Pln', checkbox_id: 'CheckPLN', isActive: false, checked: false},
            {Text:'GEL', id: 'Gel', checkbox_id: 'CheckGEL', isActive: false, checked: false},
            {Text:'DKK', id: 'Dkk', checkbox_id: 'CheckDKK', isActive: false, checked: false},
            {Text:'CZK', id: 'Czk', checkbox_id: 'CheckCZK', isActive: false, checked: false},
            {Text:'GBP', id: 'Gbp', checkbox_id: 'CheckGBP', isActive: false, checked: false},
            {Text:'SEK', id: 'Sek', checkbox_id: 'CheckSEK', isActive: false, checked: false},
            {Text:'USD', id: 'Usd', checkbox_id: 'CheckUSD', isActive: false, checked: false},
            {Text:'RUB', id: 'Rub', checkbox_id: 'CheckRUB', isActive: false, checked: false}
        ],
        selectedCurrencies: []
    },
    methods: {    
        toggleClass(Currency){    
            if(Currency.isActive){
                Currency.isActive = false;
            }else{
                Currency.isActive = true;
            } 
        },
        addCurrency(Currency, index) {
            if (Currency == true) {
                this.selectedCurrencies.push(this.Currencies[index])
            } else if (Currency == false) {
                this.$delete(this.selectedCurrencies, index)
            }
        },
        removeCurrency(index) {
            this.$delete(this.selectedCurrencies, index)
        },
        toggleCheckBox(Checkbox) {	// Funkcija kas maina checkboxa statusu uz izveletu vai neizveletu
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