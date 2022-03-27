const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: 'keyR3sFraWsqJZuo6' })
    .base('appLJw8rcQWLRrqjC')
    .table('items')

exports.handler = async(event, context, cb)=>{
    const {id} = event.queryStringParameters
    if(id){
        try{
            const product = await airtable.retrieve(id)
            if(product.error){
                return{
                    
                statusCode: 404,
                body: `No product with id: ${id}`,
                }
            }
            return{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                statusCode: 200,
                body:JSON.stringify(product),
            }
        }
        catch(error){
            return{
                statusCode: 404,
                body: `No product with id: ${id}`,
                }

        }
       
    }
    return{
        statusCode: 400,
        body:'please provide product id'
    }
}