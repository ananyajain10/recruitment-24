const rateLimit = require("express-rate-limit");
const apilimit = rateLimit({
    windowMs: 5 * 60 *  1000 ,
    max: 11,
    keyGenerator: (req) => {
        console.log(req.connection.remoteAddress);
      return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    },
    message: "Too many requests, please try again later.",
    handler: (req, res, next) => {
      res
        .status(429)
        .json("Too many requests, please try again later." );
    },
    trustProxy: true,
  });
module.exports=apilimit