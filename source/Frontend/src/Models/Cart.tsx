import Customer from "./Customer";
import { CartStatus } from './CartStatus';
import CartProduct from "./CartProduct";

export default interface Cart {
    id: number;
    customer?: Customer;
    status: CartStatus; 
    products: CartProduct[];
}

