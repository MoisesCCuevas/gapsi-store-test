/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Tooltip } from '@mui/material';

interface ProductProps {
  product: any;
}

const Product = (props: ProductProps) => {
  const { product } = props;
  return (
    <Card>
      <CardMedia
        component="img"
        alt="Product Image"
        height="140"
        image={product.image}
        title="Product Image"
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Tooltip title={product.name} placement="top">
            <Typography gutterBottom variant="h5" sx={{ textWrap: "noWrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 200 }} component="div">
              {product.name}
            </Typography>
          </Tooltip>
          <Typography variant="h6" color="text.secondary">
            {`$${product.price}`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Product;
