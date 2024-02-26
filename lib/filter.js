module.exports = function (countries, pattern) {
  const filtered = countries.reduce((filteredCountries, country) => {
    const people = country.people.reduce((filteredPeople, person) => {
      const animals = person.animals.filter((animal) =>
        animal.name.includes(pattern)
      );

      if (animals.length > 0) {
        filteredPeople.push({
          ...person,
          animals,
        });
      }

      return filteredPeople;
    }, []);

    if (people.length > 0) {
      filteredCountries.push({
        ...country,
        people: people,
      });
    }
    return filteredCountries;
  }, []);
  return filtered.length > 0 ? filtered : null;
};
