const express = require('express');
const { createTest, userCreatedTests, testAdminData } = require('../controllers/test.control');
const { requireSignIn } = require('../middlewares');
const router = express.Router();

// user/admin can create test
router.post('/create-test', requireSignIn, createTest);

// user/admin can fetch a list of test which we created
router.get('/all-created-test', requireSignIn, userCreatedTests);

// user/admin can fetch the live status of test
router.get('/test-live-status/:testId', requireSignIn, testAdminData);

// for joining the test 
router.get('/test/:testId',) // working on middlewares

// remaining 
router.patch('/register')

module.exports = router;