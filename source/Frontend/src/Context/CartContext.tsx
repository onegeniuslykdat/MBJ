import { createContext, PropsWithChildren, useState } from 'react'
import Cart from '../Models/Cart'
import { CartServices } from '../Services/CartServices';

interface CartContextModel {
    cart: Cart | undefined;
    setCart: React.Dispatch<React.SetStateAction<Cart | undefined>>;
}

export const CartContext = createContext<CartContextModel | undefined>(undefined);

export function CartContextProvider({ children }: PropsWithChildren) {
    const [cart, setCart] = useState<Cart | undefined>(CartServices.CreateNewCart());
    
    return (
        <CartContext.Provider value={{ cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
}