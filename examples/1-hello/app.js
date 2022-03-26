// const { default: axios } = require("axios");

const result = document.querySelector('.result');


const fetchData = async() =>{
    try
    {
        const {data} = await axios.get('/.netlify/functions/1-hello')
        // result.textContent = JSON.stringify(data);
        result.textContent = data;
    }
    catch(error)
    {
       console.log(error.response);
    }
}

fetchData();