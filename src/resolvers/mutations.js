const { user } = require("../mock-data");

var  Mutation = {
  addOne: (parent, args) => {
    var newUser = args.data;
    user.addOne({ ...newUser });
    return {
      status: 203,
      message: "Added"
    }
  },
  deleteOne: (parent, { id }) => {
    user.deleteOne(id);
    return {
      status: 200,
      messae: "User deleted"
    }
  },

  updateOne: (parent, { id, data }) => {
    user.updateOne(id, data);
    return {
      status: 200,
      message: "Updated"
    }
  }
};

module.exports = Mutation;
