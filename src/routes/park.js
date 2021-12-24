var express = require('express');
var router = express.Router();
const prisma = require('@/prisma')


router.get('/parks', async (req, res, next) => {
  const parks = await prisma.park.findMany()
  res.json(parks)
});

module.exports = router;