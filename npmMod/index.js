import("chalk")
  .then((chalk) => {
    // console.log(chalk.default.green.underline.inverse("Success"));
    // console.log(chalk.default.red.underline.inverse("False"));
    const validator = require("validator");
    const res = validator.isEmail("uday@berad.com");
    console.log(
      res ? chalk.default.green.inverse(res) : chalk.default.red.inverse(res)
    );
    return 0;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
