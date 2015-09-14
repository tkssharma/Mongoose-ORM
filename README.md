# MondoDB installation and ORM operation using mongoose
Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
```sh
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});

```
# creating schema 

```sh
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String
});
// Mongoose Model definition
var User = mongoose.model('users', UserSchema);
```
# All different methods on schema object 
```sh
count
find
findOne
findOneAndRemove
findOneAndUpdate
update

```


