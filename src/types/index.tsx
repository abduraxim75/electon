
export type Index = {
    id: number,
    product_name: string,
    price: number,
    image: string
}

export type User = {
    [x: string]: any
    _id: string,
    email: string
    first_name: string,
    role: "user" | "admin",
    photo_url: string,
    purchased: string[],
    liked: string[],
    registered_at: number,
    createdAt: Date,
    updatedAt:Date,
    _v: number
}

export type UserByGoogle = {
    email:string,
    first_name:string,
    photo_url:string
}


export interface Buttontype extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    btnsize: string,
}

export type ProductVariant = {
    variant_type: string;
    variant_value: string;
    variant_original_price: number;
    variant_sale_price: number;
}



export type Product = {
    [x: string]: any
    data:[],
    _id: string;
    product_name: string;
    product_images: string[];
    likedby: string[];
    likes: number;
    category: string;
    featured: boolean;
    product_type: string;
    description: string;
    visible_in_store: boolean;
    variants: ProductVariant [];
    created_at: number;
    count: number;
    selectedVariant: ProductVariant;
    _v: number;
}
