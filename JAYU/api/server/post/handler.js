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
const classboard_handler = require('./classboard_handler');
const marksaccounting_handler = require('./marksaccounting_handler');
const marksphotoshop_handler = require('./marksphotoshop_handler');
const marksassets_handler = require('./marksassets_handler');
const marksbusiness_handler = require('./marksbusiness_handler');
const marksdesign2_handler = require('./marksdesign2_handler');
const markssales_handler = require('./markssales_handler');
const marksproject2_handler = require('./marksproject2_handler');
const markswebdev_handler = require('./markswebdev_handler');

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
		...project2_handler,
		...classboard_handler,
		...marksaccounting_handler,
		...marksphotoshop_handler,
		...marksassets_handler,
		...marksbusiness_handler,
		...marksdesign2_handler,
		...markssales_handler,
		...marksproject2_handler,
		...markswebdev_handler
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