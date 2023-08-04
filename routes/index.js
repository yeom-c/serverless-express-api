const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from root!',
  });
});

router.get('/path', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from path!',
  });
});

module.exports = router;
