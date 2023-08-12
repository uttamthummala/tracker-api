
const axios = require('axios');
const priceController = require('./priceController');
 async function priceChecker(url) {
    try{
        console.log(url);
        const response = await axios.get(url);
        const length =response.data.results;
        const data = response.data.data.sites;
            data.forEach(element => {
           // console.log(element._id);
            const url=element.url;
          const temp=  priceController.getPrice_url(url)  ;
          console.log(temp);
           return temp

        });
    }catch(err){
        console.log(err);
        return temp;
    }
}

 module.exports = priceChecker;