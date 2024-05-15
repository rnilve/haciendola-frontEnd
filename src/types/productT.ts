export type ProductT = {
    id: number;
    title: string;
    handle: string;
    description?: string; 
    sku?: string;
    grams?: string; 
    stock?: number; 
    price: number;
    compare_price: number; 
    barcode?: string;
    rowCount?:number;
}
