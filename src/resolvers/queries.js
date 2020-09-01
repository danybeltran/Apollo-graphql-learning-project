const { user } = require("../mock-data");

var Query = {
  getAll: () => user.getAll(),
  getOne: (parent, { id }) => user.getOne({ id })
};

module.exports = Query;
