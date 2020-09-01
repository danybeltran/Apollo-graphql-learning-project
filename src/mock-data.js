// mock user
var users = [
  { id: 1, name: "Dany", email: "dany@github.com" },
  { id: 2, name: "Mike", email: "mike@github.com" }
];

/* Different methods for mutating/querying data */

function getAll() {
  return users;
}

function getOne({ id }) {
  return users.find((user) => user.id == id);
}

function addOne({ name, email }) {
  users.push({ id: users.length + 1, name, email });
}

// This will only update the passed fields
// so {name:"new name"} will not affect the email
// and {email:"new email"} won't affect in the name
function updateOne(id,
  payload = {
    name: "",
    email: ""
  }
) {

  users.map((usr, i) => {
    if (usr.id == id) {

      // using previous user values for fields that are not provided
      // in the body of the "data" argument in this mutation
      !payload.name && (payload.name = usr.name);
      !payload.email && (payload.email = usr.email);
      users[i] = { id, ...payload };
    }
  })

}

function deleteOne(id) {
  users.splice(id, 1);
}

module.exports = {
  user: {
    getAll,
    getOne,
    addOne,
    updateOne,
    deleteOne
  }
};
