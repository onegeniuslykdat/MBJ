import Cart from "../Models/Cart";
import CartProduct from "../Models/CartProduct";
import { CartStatus } from "../Models/CartStatus";

export class CartServices {
    static GetCart = (cart: Cart) => {
        try {
        } catch (error) {
            console.log(error);
        }
    }

    static CreateCart = (): Cart | undefined => {
        try {
            return {
                id: 1,
                status: CartStatus.BEGIN,
                products: [],
                customer: undefined
            } as Cart;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    static EditCart = (cart: Cart, newCartDetails: Cart): Cart | undefined => {
        try {
            cart.customer = newCartDetails.customer;
            cart.status = newCartDetails.status;
            return cart;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    static AddCartProduct = (cart: Cart, product: CartProduct): Cart | undefined => {
        try {
            cart.products?.push(product);
            return cart;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    static EditCartProduct = (cart: Cart, newProductDetails: CartProduct): Cart | undefined => {
        try {
            cart.products?.forEach(product => {
                if (product.id === newProductDetails.id) {
                    product.quantity = newProductDetails.quantity;
                }
            })
            return cart;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    static DeleteCartProduct = (cart: Cart, productToDelete: CartProduct): Cart | undefined => {
        try {
            let index = cart.products?.findIndex(p => p.id === productToDelete.id);
            if (index === undefined) {
                console.log('Product not found');
                return undefined;
            } else {
                cart.products?.splice(index, 1);
                return cart;
            }
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }
}
