const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://jeonyoungseo:GlOcKBoCrBpp4WU3@cluster0.uco5y.mongodb.net/healthappserver?retryWrites=true&w=majority'
)
    .then(result => {
        console.log('Connected!');
        callback(result);
    })
    .catch(err => {
    console.log(err);
    });
};

module.exports = mongoConnect;