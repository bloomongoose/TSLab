export {};

interface Mountain{
    name: string;
    height: number;
};

let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341,},
    { name: "Everest", height: 29029},
    { name: "Denali", height: 20310},
];

function findNameOfTallestMountain(mountainList:Mountain[]):string{
    let result:Mountain = {name:"",height:0};

    mountainList.forEach(function (M:Mountain){
        if(M.height > result.height){
            result = M
        }
    });

    return result.name;
}

let TallestName: string = findNameOfTallestMountain(mountains)
console.log(TallestName);



interface Product{
    name: string;
    price: number;
};

let products: Product[] = [
    { name: "Taco", price: 3.99,},
    { name: "Burrito", price: 4.99},
    { name: "Beans n Rice", price: 1.99},
    { name: "Quesadilla", price: 3.99,},
    { name: "Chips n Cheese", price: 1.99},
    { name: "Chalupa", price: 4.99}
];

function calcAverageProductPrice(ProductList:Product[]):number{
    let result = 0;
    ProductList.forEach(function(P:Product){
        result += P.price;
    });

    return result / ProductList.length;
}

let AvgPrice: number = calcAverageProductPrice(products);
console.log(AvgPrice);

interface InventoryItem{
    product: Product;
    quantity: number;
};

let Inventory: InventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10
        },
        quantity:10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity:4
    },
    {
        product: {
            name: "LED",
            price: 1
        },
        quantity:20
    }
];

function calcInventoryValue(InventoryList:InventoryItem[]):number{
    let result:number = 0;
    InventoryList.forEach(function(I:InventoryItem){
        result += I.product.price * I.quantity;
    });

    return result;
}

let inventoryValue:number = calcAverageProductPrice(Inventory);
console.log(inventoryValue);