var express = require('express');

var CountryModel = require('../models').Country;
var PeoplesInfoModel = require('../models').PeoplesInfo;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google-map' });
});

router.post('/api/data', (req, res) => {
  CountryModel.findAll({
    attributes: [
      'id', 'un_country_name', 'latitude', 'longitude'
    ],
    include: [
      {
        model: PeoplesInfoModel,
        where: {
          year: req.body.year
        }
      }
    ],
    where: {
      wb_code: req.body.id
    }   
  }).then(function(data) {
    CountryModel.findAll({
      attributes: [
        'wb_code', 'un_country_name', 'latitude', 'longitude' 
      ]
    }).then(function(countries) {
      res.json({
        countries: countries,
        data: data
      });
    });
  });
});

module.exports = router;
