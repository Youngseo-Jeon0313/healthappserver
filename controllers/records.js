const Diary = require("../models/diary");

exports.postAddDiary = (req,res,next) => {
    const date = req.body.date;
    const description = req.body.description;
    const diary = new Diary({
        date:date,
        description:description,
    });
    diary
      .save()
      .then((result) => {
        console.log("created diary");
      })
      .catch((err) => console.log(err));
    
}

// exports.getAddDiary = (req,res,next)=>{
    
// }

// exports.getEditDiary = (req,res,next)=> {
    
// }