"use strict";
exports.__esModule = true;
;
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
function findNameOfTallestMountain(mountainList) {
    var result = { name: "", height: 0 };
    mountainList.forEach(function (M) {
        if (M.height > result.height) {
            result = M;
        }
    });
    return result.name;
}
var TallestName = findNameOfTallestMountain(mountains);
console.log(TallestName);
;
var products = [
    { name: "Taco", price: 3.99 },
    { name: "Burrito", price: 4.99 },
    { name: "Beans n Rice", price: 1.99 },
    { name: "Quesadilla", price: 3.99 },
    { name: "Chips n Cheese", price: 1.99 },
    { name: "Chalupa", price: 4.99 }
];
function calcAverageProductPrice(ProductList) {
    var result = 0;
    ProductList.forEach(function (P) {
        result += P.price;
    });
    return result / ProductList.length;
}
var AvgPrice = calcAverageProductPrice(products);
console.log(AvgPrice);
;
var inventory = [
    { Product: Product, : .name, "motor": , Product: Product, : .price, 10.00: quantity, 10:  },
];
