var express = require('express');
var router = express.Router();
var moment = require('moment')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'TimeStamp Microservice' });
});

router.get('/:datestring', function(req,res) {
  var myDate;
  if(/^\d{8,}$/.test(req.params.datestring)) {
    myDate = moment(req.params.datestring, "X");
  } else {
    myDate = moment(req.params.datestring, "MMMM D, YYYY");
  }

  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
});



module.exports = router;
