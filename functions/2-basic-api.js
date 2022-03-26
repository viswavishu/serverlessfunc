const items = require('../assets/data')

exports.handler = async (event, context, cb)=>{
    return{
        statusCode: 200,
        // body: 'our 2 basic api',
        body: JSON.stringify(items),
    }
}