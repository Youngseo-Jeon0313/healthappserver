//route설정
const path = require('path');
const express = require('express');
const router = express.Router();
const DiaryController = require('../controllers/records');
router.get('/diaries', DiaryController.postAddDiary)