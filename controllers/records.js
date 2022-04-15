const Diary = require("../models/diary");

exports.postAddDiary = (req,res,next) => {
    const date = req.body.date;
    const description = req.body.description;
}