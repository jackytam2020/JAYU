const users_handler = require('./users_handler');
const comments_handler = require('./comments_handler');
const photoshop_handler = require('./photoshop_handler');
const design2_handler = require('./design2_handler');
const business_handler = require('./business_handler');
const sales_handler = require('./sales_handler');
const accounting_handler = require('./accounting_handler');
const assets_handler = require('./assets_handler');
const webdev_handler = require('./webdev_handler');
const project2_handler = require('./project2_handler');

module.exports.post = async (event, context, callback)=>{
  var obj = (typeof event.body === "object") ? event.body : JSON.parse(event.body),
      response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
        },
        body: null
      };
  
  var key = obj.key,
      posts = obj.data,
      result = null;
  
  //combine all handlers
  var handlers = {
		...users_handler,
		...comments_handler,
		...photoshop_handler,
		...design2_handler,
		...business_handler,
		...sales_handler,
		...accounting_handler,
		...assets_handler,
		...webdev_handler,
		...project2_handler
  }

  if(handlers[key]){
    result = await handlers[key](posts);
  }

  if(result === null){
    result = {status:false, msg:"no handler"};
  }
  
  response.body = JSON.stringify(result);
  if(typeof callback === "function"){
    callback(null, response);
  }
  return response;
}