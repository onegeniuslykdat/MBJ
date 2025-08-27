import Customer from "./Customer";
import { OrderMode } from './OrderMode';
import CartProduct from "./CartProduct";

export default interface Order {
    id: number;
    customer?: Customer;
    orderMode?: OrderMode;
    addressLine: string;
    suburb: string;
    postcode: string;
    products: CartProduct[];
    notes?: string;
    receipt?: File;
    totalCost: number;
}

