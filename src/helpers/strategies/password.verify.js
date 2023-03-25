const bcrypt = require('bcrypt');

async function verifyPassword(pass, hash) {
  const isMatch = await bcrypt.compare(pass, hash);

  return isMatch;
}



module.exports = verifyPassword;