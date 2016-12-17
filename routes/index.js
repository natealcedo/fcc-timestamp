var express = require('express');
var router = express.Router();
var moment = require('moment')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'TimeStamp Microservice' });
});


router.get('/:timestamp', (req,res) => {
  let time = moment(req.params.timestamp, 'MMMM DD, YYYY', true);
  if (!time.isValid())
    time = moment.unix(req.params.timestamp);
  
  if (!time.isValid()) {
    res.json({
      'humanReadable': null,
      'unix': null
    });
  }
  
  res.json({
    'humanReadable': time.format('MMMM DD, YYYY'),
    'unix': time.format('X')
  });
});


module.exports = router;
