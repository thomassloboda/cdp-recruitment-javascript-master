module.exports = function (countries) {
  return countries.reduce((countedCountries, country) => {
    return [
      ...countedCountries,
      {
        name: `${country.name} [${country.people.length}]`,
        people: country.people.reduce((countedPeople, person) => {
          return [
            ...countedPeople,
            {
              name: `${person.name} [${person.animals.length}]`,
              animals: person.animals,
            },
          ];
        }, []),
      },
    ];
  }, []);
};
