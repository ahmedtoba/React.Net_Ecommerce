import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import Product from "../../app/models/product";

interface Props {
    product: Product;
}

export default function CatalogCard({product}: Props) {
    return (
        <Card>
            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{sx:{fontWeight: 'bold', color: 'primary.main'}}}
            />
            <CardMedia
                title={product.name}
                image={product.pictureUrl}
                sx={{height: 140, backgroundSize:'contain', bgcolor: 'primary.light'}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" sx={{color: 'primary.main'}}>
                    ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        


    )
}