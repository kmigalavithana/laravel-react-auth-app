export interface IProductDetails {
    image: string;
    product_name: string;
    product_description: string;
    features?: string[];
    product_price: string;
    product_qty: number;
}

export interface IShoppingCartItemProp {
    item: IProductDetails;
}
