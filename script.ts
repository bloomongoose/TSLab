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

//function findNameOfTallestMountain()

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

//functions

interface InventoryItem{
    Product: {
        name: string;
        price: number;
    };
    quantity: number;
};

let inventory: InventoryItem[] = [
    { Product.name: "motor", Product.price: 10.00 quantity: 10,},
    
];