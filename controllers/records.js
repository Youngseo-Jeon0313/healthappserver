const Diary = require("../models/diary");

exports.postAddDiary = async(req,res,next) => {

    const name = req.body.name;
    const date = req.body.date;
    const description = req.body.description;
    console.log(name);
    console.log(date);
    console.log(description);
    const diary = await new Diary({
        name:name,
        date:date,
        description:description,
    });
    diary.save()
    .then(diary => {
      console.log(diary);
      res.json({result:1})
      res.send(diary)
    })
    .catch(err =>
      res.json({result:0}));
};

var Diary_sample= new Diary({
  name:"도현빈",
  date:"2022-07-21",
  description:"전역마렵다."
});

Diary_sample.save(function(err,Diary_sample){
  if(err) return console.error(err);
  console.dir(Diary_sample);
});

// exports.getAddDiary = (req,res,next)=>{
    
// }

// exports.getEditDiary = (req,res,next)=> {
    
// }