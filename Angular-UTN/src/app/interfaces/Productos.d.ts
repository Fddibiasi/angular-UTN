export interface Producto{
    id:string;
    title:string;
    image:string | number; 
    attributes:[
        {
            [k:string]: any
        }
    ];
    international_delivery_mode:string;
}

export interface ResponseProducto{
    site_id: string;
    query: string;
    results: Producto[]
}