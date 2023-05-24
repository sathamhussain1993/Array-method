// Step 1: Fetch the data from the API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Step 2: Get all the countries from the Asia continent/region using the Filter function
    const asiaCountries = data.filter((country) => country.region === 'Asia');

    console.log("Countries in Asia:", asiaCountries);

    // Step 3: Get all the countries with a population of less than 2 lakhs using the Filter function
    const populationLessThan2Lakhs = data.filter((country) => country.population < 200000);

    console.log("Countries with population less than 2 lakhs:", populationLessThan2Lakhs);

    // Step 4: Print the following details name, capital, flag using forEach function
    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
    });

    // Step 5: Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);

    console.log("Total population of countries:", totalPopulation);

    // Step 6: Print the country which uses US Dollars as currency
    const countryUsingUSD = data.find((country) => country.currencies && country.currencies.USD);

    console.log("Country using US Dollars as currency:", countryUsingUSD);
  })
  .catch((error) => console.log("Error fetching data:", error));
