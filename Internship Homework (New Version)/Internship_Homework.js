new Vue({
  el: "#Menu",
  data: {
      // Valutu masivs
    Currencies: [
      {
        Text: "EUR",
        id: "Eur",
        checkbox_id: "CheckEUR",
        isActive: false,
        checked: false
      },
      {
        Text: "PLN",
        id: "Pln",
        checkbox_id: "CheckPLN",
        isActive: false,
        checked: false
      },
      {
        Text: "GEL",
        id: "Gel",
        checkbox_id: "CheckGEL",
        isActive: false,
        checked: false
      },
      {
        Text: "DKK",
        id: "Dkk",
        checkbox_id: "CheckDKK",
        isActive: false,
        checked: false
      },
      {
        Text: "CZK",
        id: "Czk",
        checkbox_id: "CheckCZK",
        isActive: false,
        checked: false
      },
      {
        Text: "GBP",
        id: "Gbp",
        checkbox_id: "CheckGBP",
        isActive: false,
        checked: false
      },
      {
        Text: "SEK",
        id: "Sek",
        checkbox_id: "CheckSEK",
        isActive: false,
        checked: false
      },
      {
        Text: "USD",
        id: "Usd",
        checkbox_id: "CheckUSD",
        isActive: false,
        checked: false
      },
      {
        Text: "RUB",
        id: "Rub",
        checkbox_id: "CheckRUB",
        isActive: false,
        checked: false
      }
    ],
     // Izveleto valutu masivs
    selectedCurrencies: []
  },
  methods: {
      // Funkcija kas maina valutas izveles pogas klasi, lai ta stradatu ka sledzis nevis poga
    toggleClass(Currency) {
      if (Currency.isActive) {
        Currency.isActive = false;
      } else {
        Currency.isActive = true;
      }
    },
      // Funkcija kas izveido jaunu masiva ierakstu nemot datus no jau pastavosa masiva
    addCurrency(Currency, index) {
      if (Currency == true) {
        this.selectedCurrencies.push(this.Currencies[index]);
      } else if (Currency == false) {
        this.$delete(this.selectedCurrencies, index);
      }
    },
      // Funkcija kas izdzes izveleto valutu no ta masiva
    removeCurrency(index) {
      this.$delete(this.selectedCurrencies, index);
    },
      // Funkcija kas maina checkboxa statusu uz izveletu vai neizveletu
    toggleCheckBox(Checkbox) {
      if (Checkbox.checked == false) {
        Checkbox.checked = true;
      } else {
        Checkbox.checked = false;
      }
    }
  }
});
