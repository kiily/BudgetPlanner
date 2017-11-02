const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
  
});


router.get('/', (req, res) => {
  //this is the correct path in the dist folder as there are no subfolders.
  res.render('index');
  
});

module.exports = router;