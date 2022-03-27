//use this when using env variables
// require('dotenv').config()
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: 'keyR3sFraWsqJZuo6' })
    .base('appLJw8rcQWLRrqjC')
    .table('items')

exports.handler = async (event, context, cb) => {
    try {
        const { records } = await airtable.list();
        const products = records.map((product) => {
            const { id } = product
            const { name, images, price, description, colors, featured,company,stock,stars,reviews,category,shipping} = product.fields
            const url = images[0].url
            return { id, name, url, price, description, colors, featured,company,stock,stars,reviews,category,shipping }

        })
        // .join('')    `
        return {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
            body: JSON.stringify(products),
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Internal server error',
        }
    }

}
