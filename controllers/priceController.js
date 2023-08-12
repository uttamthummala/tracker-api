
const axios = require('axios');
const cheerio = require('cheerio');

exports.getPrice = async (req, res) => {

    const url = req.params.url;
    console.log(url);
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

    //     const price = $(`#priceblock_ourprice`).text().trim();
    //     const title = $(`#productTitle`).text().trim();
    //    // const rating = $(`#acrPopover`).attr(`title`);
    //     const image = $(`#landingImage`).attr(`src`); //a-dynamic-image
    const price = $(`span.aok-offscreen`).text().trim().split(" ")[0];

        const title = $(`span.product-title-word-break`).text().trim();
       // const rating = $(`#acrPopover`).attr(`title`);
        const image = $(`img.a-dynamic-image`).attr(`src`); //a-dynamic-image
       // const description = $(`#feature-bullets`).text().trim();
       // const review = $(`#acrCustomerReviewText`).text().trim();
        const result = {
            title,
            price,
           
            image,
            
        };
        res.status(200).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
// const getPrice_url =  async (url) => {

//     //const url = req.params.url;
//      console.log(url);
//     // console.log(typeof(url));
//     try {
//         const response = await axios.get(url);
//         const html = response.data;
//         // console.log(typeof(html));
//         const $ = cheerio.load(html);
        
//     //     const price = $(`#priceblock_ourprice`).text().trim();
//     //     const title = $(`#productTitle`).text().trim();
//     //    // const rating = $(`#acrPopover`).attr(`title`);
//     //     const image = $(`#landingImage`).attr(`src`); //a-dynamic-image
//     const price = $(`span.aok-offscreen`).text().trim().split(" ")[0];

//         const title = $(`span.product-title-word-break`).text().trim();
//        // const rating = $(`#acrPopover`).attr(`title`);
//         const image = $(`img.a-dynamic-image`).attr(`src`); //a-dynamic-image
//        // const description = $(`#feature-bullets`).text().trim();
//        // const review = $(`#acrCustomerReviewText`).text().trim();
//         const result = {
//             title,
//             price,
           
//             image,
            
//         };
//        const data ={
//             status: 'success',
//             data: {
//                 result
//             }
//         };
//         return data;
//     } catch (err) {
//      const data= {
//             status: 'fail',
//             message: err
//         };
//         return data;
//     }
// };

// getPrice_url().then((data)=>{console.log(data)});

// exports.getPrice_url = getPrice_url;

