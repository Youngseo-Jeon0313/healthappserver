//route설정
const path = require('path');
const express = require('express');
const router = express.Router();
const DiaryController = require('../controllers/records');
router.post('/diary', DiaryController.postAddDiary);
// router.get('/diary/add-diary', DiaryController.getAddDiary);
// router.get('/diary/edit-diary/:diaryId',getEditDiary);

module.exports = router;