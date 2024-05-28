import { Grid, Paper, Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ProductInterface } from "../../store/interface/product.interface";

const ProductCard = ({ product }: {product: ProductInterface}) => {
  const theme:any = useTheme();

  return (
    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Paper
        sx={{
          height: '40vh',
          width: '100%',
          borderRadius: '10px',
          boxShadow: '1px 1px 1px 0px #8080804f',
          backgroundColor: (theme) =>
            theme.palette.common.white,
        }}
      >
        <Card sx={{
          background: theme.palette.common.white,
          boxShadow: 'none',
          '&.MuiCard-root': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }
        }}>
          <CardHeader
            title={product?.title}
            sx={{
              whiteSpace: 'nowrap',
              '& .MuiCardHeader-title': {
                fontSize: '15px',
                textAlign: 'center',
                color: 'black',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                [theme.breakpoints.down('lg')]: {
                  width: '19vw',
                },
                [theme.breakpoints.down('md')]: {
                  width: '40vw',
                },
                [theme.breakpoints.down('sm')]: {
                  width: '92%',
                },
              },
            }}
          />
          <CardMedia
            component="img"
            height="auto"
            image={product?.image}
            alt="Paella dish"
            sx={{
              '&.MuiCardMedia-root': {
                objectFit: 'contain',
                height: '18vh'
              }
            }}
          />
          <CardContent sx={{
            '&.MuiCardContent-root': {
              borderRadius: '10px',
              background: product?.category === "men's clothing" ? theme.palette.primary.main : theme.palette.secondary.main,
              overflow: 'hidden',
              textAlign: 'center',
              padding: '5px 25px 10px 25px'
            }
          }}>
            <Typography variant="h3" color={theme.palette.price} sx={{padding:'6px'}} > Rs {product?.price?.toFixed(2)}</Typography>
            <Typography variant="body2"
              sx={{
                display: '-webkit-box',
                '-webkit-line-clamp': '3',
                '-webkit-box-orient': 'vertical',
                overflow: 'hidden'
              }}
              >
              {product?.description}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default ProductCard;