 const CreateResponse = require('../utility/createErrorResponse');
 const errorlog = require('errorlog');
 const  log = errorlog({});
 const errorHandler = (err, req, res, next) => {
     let error = {
         ...err
     };

     log(error)
     error.message = err.message
     if (err.name === 'ValidationError') {
         const message = Object.values(err.errors).map(val=>val.message).join(',')
         error = new CreateResponse(message, 400)
     }
     if(err.name === 'CastError'){
          const message = `Resource Not Found With Id ${err.value}`;
          error = new CreateResponse(message, 404)
     }

     return res.status(error.statusCode || 500).json({
         success: false,
         error: error.message || 'Server Error'
     })

 }
 module.exports = errorHandler