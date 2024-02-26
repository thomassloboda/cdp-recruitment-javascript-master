const { hasArgument, getArgumentValue } = require("./args");

const hasFilter = hasArgument("filter");
if (hasFilter) {
  const filter = getArgumentValue("filter");
  // Do something
}
const hasCount = hasArgument("count");
if (hasCount) {
  // Do something
}
