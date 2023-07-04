require('dotenv').config();
const express = require('express');
const { getDb, connectToDb } = require('./db.js')
const { ObjectId } = require('mongodb');

//Hashing password library
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const app = express();
const cors = require('cors');
const PORT = 3030;
let db;
let collectionName = 'j_dentistry';

connectToDb((error) => {
  if (!error) {
    app.listen(PORT, () => { 
      console.log(`it's alive on http://localhost:${PORT}`)
    })
    db = getDb()
  }
})

app.use(express.json());

//Allows to connect more than one server
app.use(cors({
  allowOrgin: "http://localhost:3030/", 
}))

//Creates and store new user in DB
app.post('/api/post', (req, res) => {
  const user = req.body;
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash
  db.collection(collectionName)
  .insertOne(user)
  .then(result => {
    res.status(201).json(result)
  })
  .catch(error => {
    res.status(500).json({
      error: 'Could not make a new document'
    })
  })
})

//Responses will check if a username exist in DB
app.get('/api/user/:username', (req, res) => {
  db.collection(collectionName)
    .findOne({ username: req.params.username })
    .then(result => {
      res.status(200).json(result);
    })
})

//Responses will check if a username exist in DB
app.get('/api/email/:email', (req, res) => {
  db.collection(collectionName)
    .findOne({ email: req.params.email })
    .then(result => {
      //Returns result null if email does not exist in DB
      res.status(200).json({result});
    })
})

app.get('/api/profile/:email', (req, res) => {
  db.collection(collectionName)
    .findOne({ email: req.params.email })
    .then(result => {
      res.status(200).json({
        username: result.username,
        email: result.email,
        firstName: result.firstName,
        lastName: result.lastName,
        dob: result.dob,
        phoneNum: result.phoneNum,
        dentistry: result.dentistry,
        dentalIn: result.dentalIn,
        appointments: result.appointments,
        role: result.role
      })
    })
})

//Finds user by email and test passwords match
app.get('/api/authenticate/:email/:password', (req, res) => {
  let password = req.params.password;
  //Try and Catch finds user by email
  try {
    db.collection(collectionName)
    .findOne({ email: req.params.email })
    .then(result => {
      let hashed = result.password //Hashed password from DB 
      //Response is true when hashed passwords matched, else null
      bcrypt.compare(password, hashed, function(err, resultMatched){
        res.status(200).json(resultMatched);
      })
    })
  } catch(error) {
    //If user does not exist rresponse is false
    res.status(200).json(false);
  }
})

//Updates user's appointment, adding new appointment
app.put('/api/schedule/', (req, res) => {
  let email = req.body.email;
  let update = { $push: { appointments: {
    type: req.body.type,
    date: req.body.date,
    time: req.body.time,
    index: req.body.index
  }}}
  db.collection(collectionName)
    .findOneAndUpdate({email: email}, update)
    .then(result => {
      res.status(200).json(result);
    })
})

//Deletes an appointment
app.delete('/api/delete', (req, res) => {
  //Finds user by email and deletes appointment by appointment's index
  db.collection(collectionName)
  .findOneAndUpdate({ email: req.body.email }, 
    { $pull: {'appointments': { index: req.body.index } }})
  .then(result => {
    res.status(200).json(result);
  })
})

//Updates users personal info
app.patch('/api/:id', (req, res) => {
  const updates = req.body;
  if (ObjectId.isValid(req.params.id)) {
    db.collection(collectionName)
      .updateOne({ _id: new ObjectId(req.params.id) }, {$set: updates})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        res.status(500).json({error: "Could not update document"})
      })
  } else {
    res.status(500).json({error: "Could not update document"})
  }
})

app.get('/', (req, res) => {
  res.send({
    "message": "I'm here"
  })
});