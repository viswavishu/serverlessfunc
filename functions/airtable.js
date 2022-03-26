//use this when using env variables
// require('dotenv').config()
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: 'keyR3sFraWsqJZuo6' })
    .base('appLJw8rcQWLRrqjC')
    .table('finalproducts')

exports.handler = async (event, context, cb) => {
    try {
        const { records } = await airtable.list();
        // console.log(records)
        const products = records.map((product) => {
            const { id } = product
            const { name, image, price, description } = product.fields
            const url = image[0].url
            return { id, name, url, price, description }
        }).join('')
        return {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
            // body: 'Airtable Example',
            body: JSON.stringify(records),//prints the api to page
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Internal server error',
        }
    }

}

