const bcrypt = require("bcrypt");

async function hashPassword(pass) {
  const hash = await bcrypt.hash(pass, 10);
  return hash;
}

module.exports = hashPassword;
