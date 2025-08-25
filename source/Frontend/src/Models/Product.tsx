// import bole from '../Assets/bole.jpg'

// export default class Product {
//     id: number = 1;
//     name: string = 'Bole';
//     description: string = "Port harcourt style bole, enriched with 2 roasted plantain, 3 roasted potato, 1 fish, vegetable, ugba and stew";
//     imageUrl: string = bole

//     constructor(_name: string) {
//         this.name = _name;
//     }
// }

export default interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}