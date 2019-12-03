new Vue({
  el: "#Menu",
  data: {
    Currencies: ["EUR", "PLN", "GEL", "DKK", "CZK", "GBP", "SEK", "USD", "RUB"],
    selectedCurrencies: []
  },
  methods: {
    get_Class(Currency) {
      if (
        this.Currencies.includes(Currency) &&
        this.selectedCurrencies.includes(Currency)
      ) {
        return "on";
      } else return "off";
    },
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
    getCheckboxClass(Currency) {
      if (
        this.Currencies.includes(Currency) &&
        this.selectedCurrencies.includes(Currency)
      )
        return "pressed";
      else return "not_pressed";
    }
  }
});