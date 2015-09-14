var User = require('./models/users');

// create a new user called chris
var chris = new User({
  name: 'TArsun',
  username: 'ssharma',
  password: 'shsarma' 
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});

// get the user TArun one user
User.find({ username: 'TArun' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});


// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // delete him
  User.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});

// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});

