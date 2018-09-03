let cat = require("cat-me");
let joke = require("knock-knock-jokes");
let faker = require("faker");

// const randomProductNameAndPrice = function(n){
    for( let i = 0; i < 10; i++){
        console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
    }
// }

// console.log(randomProductNameAndPrice(10));
