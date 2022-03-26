// const { default: axios } = require("axios");

const result = document.querySelector('.result')

const fetchData = async() => {
 try{
     const {data} = await axios.get('https://myserverless.netlify.app/api/2-basic-api');
     const products = data.map((product) => {
      const{image:{url},name,price} = product
      return `<article class="product">
      <img src="${url}" alt="${name}"/>
      <div class="info">
      <h5>${name}</h5>
      <h5 class="price">$${price}</h5>
      </div>
      </article>`
    })
    .join('')
     result.innerHTML = products
 }catch(error){
    result.innerHTML = `<h4>There is an error try again later</h4>`
 }

}

fetchData();