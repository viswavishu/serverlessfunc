// domain/.netlify/functions/1-hello

const items = [
    {
        name: "viswa",
        age: 20,
    },
    {
        name: "harsha",
        age: 22,
    }
]
exports.handler = async (event, context) => {

    return {
        statusCode: 200,
        body: 'hello world hello react',
        // body: JSON.stringify(items),
    }
}
