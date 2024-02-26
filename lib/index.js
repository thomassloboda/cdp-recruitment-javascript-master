const { data: countries } = require("../data");
const { hasArgument, getArgumentValue } = require("./args");
const filter = require("./filter");

const hasFilter = hasArgument("filter");
if (hasFilter) {
  const filterTerm = getArgumentValue("filter");
  console.log(JSON.stringify(filter(countries, filterTerm), null, 2));
}
const hasCount = hasArgument("count");
if (hasCount) {
  // Do something
}
