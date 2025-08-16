const productsPrices=[
    {id: 1, name:'realme Phone', price: 22451},
    {id: 2, name:'oppo phone ', price: 16351},
    {id: 3, name:'infinix phone', price: 18351},
    {id: 4, name:'samsung phone', price: 26361},
    {id: 5, name:'mac air laptop', price: 26351},
    {id: 6, name:'iphone', price: 26351},
    {id: 7, name:'Huwai Laptop', price: 26351},
];

function Prices(productsPrices, search){
    const priceMatched=[]
    for(const product of productsPrices){
        if(product.price === search){
            priceMatched.push(product);
        }
    }
    return priceMatched;
}

const result =Prices(productsPrices, 26351);
console.log(result);