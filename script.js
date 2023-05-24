// Make a GET request to retrieve country data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia
    const asiaCountries = data.filter(country => country.region === 'Asia');

    console.log('Countries in Asia:');
    asiaCountries.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg);
      console.log('--------------------------');
    });

    // Filter countries with a population less than 2 lakhs
    const populationLessThan2Lakhs = data.filter(country => {
      const population = country.population;
      return population && population < 200000;
    });

    console.log('Countries with population less than 2 lakhs:');
    populationLessThan2Lakhs.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg);
      console.log('--------------------------');
    });

    // Calculate the total population of countries
    const totalPopulation = data.reduce((acc, country) => {
      const population = country.population;
      return acc + (population ? population : 0);
    }, 0);

    console.log('Total population of countries:', totalPopulation);

    // Filter the country that uses US Dollars as currency
    const usDollarCountries = data.filter(country => {
      const currencies = country.currencies;
      return currencies && currencies.USD;
    });

    console.log('Countries that use US Dollars as currency:');
    usDollarCountries.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg);
      console.log('--------------------------');
    });
  })
  .catch(error => console.log('Error:', error));
