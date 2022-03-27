const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: 'keyR3sFraWsqJZuo6' })
    .base('appLJw8rcQWLRrqjC')
    .table('items')

exports.handler = async(event, context, cb)=>{
    //console.log(event)
    let {id} = event.queryStringParameters
    let product = await airtable.retrieve(id)

    let {name, images, price, description, colors, featured, company, stock, stars, reviews, category, shipping} = product.fields
       console.log({id,name, price, images, description, colors, featured, company, stock, stars, reviews, category, shipping}) 
        
       

    if(id){
        
        try{

        
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
                body:JSON.stringify({id,name, price, images, description, colors, featured, company, stock, stars, reviews, category, shipping}),
                //body:console.log(product),
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