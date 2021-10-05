const countryDataQuery = require("country-data-query");
const { getISOByParam } = require("iso-country-currency");

const countries = [
  "Germany",
  "Norway",
  "Poland",
  "Romania",
  "Ukraine",
  "United Kingdom",
  "United States",
  "Brazil",
  "Canada",
  "China",
  "Albania",
  "Australia",
  "Azerbaijan",
  "Belarus",
  "Bulgaria",
  "Hungary",
  "India",
  "Iceland",
  "Israel",
  "Japan",
  "Croatia",
  "Denmark",
  "Egypt",
  "Mexico",
  "New Zealand",
  "Russia",
  "Saudi Arabia",
  "Serbia",
  "Singapore",
  "South Africa",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Turkey",
  "Vietnam",
];

export const getData = (numberOfCountries, URL) => {
  let data = [];
  for (let i = 0; i < numberOfCountries + 1; i++) {
    try {
      const country = countryDataQuery({
        country: {
          type: "countrycode",
          value: getISOByParam("countryName", countries[i]),
        },
      });
      if (country.length !== 0) {
        const id = i;
        const symbol = country[0].currency.symbol;
        const currency = country[0].currency.code;
        const name = country[0].currency.name;
        const rate = 1.2345;
        const countryCode = country[0].code === "DE" ? "EU" : country[0].code;

        data.push({ id, symbol, currency, name, rate, countryCode });
      }
    } catch (err) {}
  }
  return data;
};
