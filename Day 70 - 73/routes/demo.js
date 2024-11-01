const express = require('express');

const db = require('../data/database');
const bcrypt = require('bcryptjs');
const { emit } = require('nodemon');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('welcome');
});

router.get('/signup', function (req, res) {
  res.render('signup');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/signup', async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredConfirmEmail = userData['confirm-email'];
  const enteredPassword = userData.password;

  if (!enteredEmail || !enteredConfirmEmail || !enteredPassword || enteredPassword.trim() < 6 || enteredEmail !== enteredConfirmEmail || !enteredEmail.includes('@')) {
    console.log('Incorrect Data!');
    return res.redirect('/signup');
  };

  const existingUser = await db.getDb().collection('users').findOne({email: enteredEmail});

  if(existingUser) {
    console.log('User aready exists!');
    return res.redirect('/signup');
  }

  const hashedPassword = await bcrypt.hash(enteredPassword, 12);

  const user = {
    email: enteredEmail,
    password: hashedPassword
  }

  await db.getDb().collection('users').insertOne(user);

  res.redirect('/login');
});

router.post('/login', async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  const existingUser = await db.getDb()
  .collection('users')
  .findOne({email: enteredEmail});

  if (!existingUser) {
    console.log('Could not log in!');
    return res.render('/login');
  }

  const passwordsAreEqual = await bcrypt.compare(enteredPassword, existingUser.password);

  if (!passwordsAreEqual) {
    console.log('Password is wrong!');
    return res.redirect('/login');
  }

  console.log('User is authenticated!');
  res.redirect('/admin');
  
});

router.get('/admin', function (req, res) {
  // check the user "ticket"
  res.render('admin');
});

router.post('/logout', function (req, res) {});

module.exports = router;
