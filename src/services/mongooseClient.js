// import redis from ""
// import { Logger } from "../services/Logger"
// import config from "../utils/config"
// import { injectRedisClient } from "../utils/dependencyInjection"

// const logger = new Logger("RedisClient")

// const init = () =>
//     redis
//         .createClient({ host: config.REDIS_HOST, port: config.REDIS_PORT })
//         .on("ready", () => logger.debug("Redis Client ready."))

// export default injectRedisClient(init)
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