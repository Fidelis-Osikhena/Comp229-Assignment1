/*Name: Fidelis Osikhena Student ID: 300977916 Date: 10/10/20*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Projects Page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Services Page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact Me Page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});
module.exports = router;
