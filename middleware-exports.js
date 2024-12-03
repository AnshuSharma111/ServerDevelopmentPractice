const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const date = new Date().getFullYear();
    console.log(method, url, date);
    next();
}

const apiOnly = (req, res, next) => {
    const { clearance, name } = req.query;
    if (clearance < 3){
        req.access = 0;
    }
    else{
        req.access = 1;
    }
    next();
}

module.exports = { logger, apiOnly };