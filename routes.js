const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Collection = require('./collection.js');
mongoose.connect('mongodb://localhost:27017/collection-db');

router.get('/', function(req, res){
  Collection.find({}).then(function(results){
    res.render('index', {results});
  })
})

router.post('/', function(req, res){

  let collection = new Collection(
    {series: req.body.series,
     issue: req.body.issue,
     creators: {author: req.body.author, artist: req.body.artist},
     publisher: req.body.publisher})

  collection.save().then(function(){
    console.log('saved');
  }).catch(function(){
    console.log('error');
  })
  res.redirect('/');
})


module.exports = router;
