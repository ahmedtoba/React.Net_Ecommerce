import { useState, useEffect } from "react";
import Product from "../../app/models/product";
import CatalogList from "./CatalogList";



export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(()=>{
        fetch('http://localhost:5084/api/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return (
        <>
            <CatalogList products={products} /> 
        </>
    );
}