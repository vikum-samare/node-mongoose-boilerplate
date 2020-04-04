const conf = include("utils/config")
const { MONGO_DB_URL } = conf

module.exports = (mongoose) => {

    mongoose.Promise = global.Promise;

    // Connecting to the database
    mongoose.connect(MONGO_DB_URL, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    }); 

}