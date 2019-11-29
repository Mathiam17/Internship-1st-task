new Vue({
  el: "#Menu",
  data: {
    // Valutu masivs
    Currencies: ["EUR", "PLN", "GEL", "DKK", "CZK", "GBP", "SEK", "USD", "RUB"],
    // Izveleto valutu masivs
    selectedCurrencies: []
  },
  methods: {
    // Funkcija kas maina valutas izveles pogas klasi, lai ta stradatu ka sledzis nevis poga

    // Pagaidam strada
    get_Class(Currency) {
      if (
        this.Currencies.includes(Currency) &&
        this.selectedCurrencies.includes(Currency)
      ) {
        return "on";
      } else return "off";
    },
    // Funkcija kas izveido jaunu masiva ierakstu nemot datus no jau pastavosa masiva
    Add_or_Remove_Currency(index, Currency) {
      if (
        this.Currencies.includes(Currency) &&
        this.selectedCurrencies.includes(Currency)
      )
        this.$delete(
          this.selectedCurrencies,
          this.selectedCurrencies.indexOf(Currency)
        );
      else this.selectedCurrencies.push(this.Currencies[index]);
    },
  // Funkcija kas maina checkboxa statusu uz izveletu vai neizveletu
  toggle_CheckBox(Currency) {
    if (
      this.Currencies.includes(Currency) &&
      this.selectedCurrencies.includes(Currency)
    ) 
	return true
	else return false
	} 
}
});
