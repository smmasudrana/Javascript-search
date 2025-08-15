//two type for loop
// const numbers = [53, 63, 97, 23, 25, 16, 84]

// for(let i = 0; i < numbers.length; i++){
//     const number =numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number);
// }



//matched or search with function;
const products=[
    {id: 1, name:'realme Phone', price: 26351},
    {id: 2, name:'oppo phone ', price: 16351},
    {id: 3, name:'infinix phone', price: 18351},
    {id: 4, name:'samsung phone', price: 26351},
    {id: 5, name:'mac air laptop', price: 26351},
    {id: 6, name:'iphone', price: 26351},
    {id: 7, name:'Huwai Laptop', price: 26351},
];

function matchedProducts(products, search){
    const matched=[]
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result=matchedProducts(products, 'Phone');
console.log(result);


