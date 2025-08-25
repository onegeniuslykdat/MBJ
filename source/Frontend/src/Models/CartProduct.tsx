import Product from "./Product";

export default interface CartProduct {
    id: number;
    cartId: number;
    quantity: number;
    product: Product;
}