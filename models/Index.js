const User = require("./User");
const Rent = require("./Rent");

Rent.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Rent };
