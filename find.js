var User = require('./models/users');
// get all the users
ss

User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

