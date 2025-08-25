import products from '../Data/products.json'
import Product from '../Models/Product';

export class ProductServices {

    static GetProducts = (): Product[] => {
        const publicUrl = process.env.PUBLIC_URL;
        try {
            const allProducts: Product[] = products.map(p => {
                return {
                    "id": p.id,
                    "name": p.name,
                    "description": p.description,
                    "price": p.price,
                    "imageUrl": publicUrl + p.imageUrl
                };
            })
            return allProducts;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    static GetProductById = (id: number): Product | undefined => {
        const product: Product | undefined = this.GetProducts().find(p => p.id === id);
        if (product !== undefined) {
            return product;
        }
        console.log('Incorrect Product Id');
    }

}
