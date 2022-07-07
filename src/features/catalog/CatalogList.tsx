import { Grid } from "@mui/material";
import Product from "../../app/models/product";
import CatalogCard from "./CatalogCard";

interface Props {
    products: Product[];
}

export default function CatalogList({products}:Props) {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <CatalogCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}