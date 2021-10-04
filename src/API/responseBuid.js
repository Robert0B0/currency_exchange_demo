const countryDataQuery = require("country-data-query");
const { getISOByParam } = require("iso-country-currency");

const allCountries = [
  "Albania",
  "Argentina",
  "Armenia",
  "Australia",
  "Azerbaijan",
  "Belarus",
  "Bolivia",
  "Botswana",
  "Bulgaria",
  "Brazil",
  "Cambodia",
  "Canada",
  "China",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Czech Republic",
  "Denmark",
  "Dominican Republic",
  "Egypt",
  "El Salvador",
  "Euro Countries",
  "Fiji",
  "Ghana",
  "Guatemala",
  "Guinea",
  "Guyana",
  "Hong Kong",
  "Honduras",
  "Hungary",
  "Indonesia",
  "India",
  "Iceland",
  "Iran",
  "Israel",
  "Japan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Malawi",
  "Malaysia",
  "Mexico",
  "Morocco",
  "Namibia",
  "Nepal",
  "New Zealand",
  "Norway",
  "Oman",
  "Pakistan",
  "Peru",
  "Philippines",
  "Poland",
  "Qatar",
  "Romania",
  "Russia",
  "Saudi Arabia",
  "Serbia",
  "Seychelles",
  "Singapore",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Thailand",
  "Trinidad and Tobago",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zimbabwe",
];

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

/* { id: 2, symbol: "£", currency: "GBP", name: "British Pound", rate: 1.1693 }, */

export const getData = (numberOfCountries) => {
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
