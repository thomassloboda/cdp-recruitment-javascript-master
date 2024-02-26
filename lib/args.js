const hasArgument = (name, prefix = "--") => {
  return !!process.argv.find((arg) => arg.startsWith(`${prefix}${name}`));
};

const getArgumentValue = (name, prefix = "--") => {
  return process.argv
    .find((arg) => arg.startsWith(`${prefix}${name}`))
    .split("=")[1];
};

module.exports = {
  hasArgument,
  getArgumentValue,
};
