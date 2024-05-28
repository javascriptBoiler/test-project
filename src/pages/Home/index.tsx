import { useEffect } from "react";
import {Typography, Button, Grid, Link} from '@mui/material';

import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchAllProducts } from "../../store/slice/productSlice";
import { ProductInterface } from "../../store/interface/product.interface";
import Container from "../../components/Container";
import ProductContainer from "../../components/ProductContainer";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector((state:any) => state.product);

  useEffect(() => {
    dispatch(fetchAllProducts()).unwrap();
  }, []);

  const data = products?.filter(({category}:{category: string}) => category === "men's clothing" || category === "women's clothing")
    ?.map((product: ProductInterface, key: number) => (<ProductCard product={product} key={`product-key-${key}`}/>));

  if (status === "pending") {
    return (
      <Container>
        <h4>Please wait...</h4>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <h4>error..{error?.message}</h4>
      </Container>
    )
  }

  return (
    <section>
        <Typography variant="h4">Flash Sale</Typography>
        <ProductContainer isWrap={false}>
          {data}
        </ProductContainer>
        <Typography variant="h4" sx={{marginTop:'20px'}}>Categories</Typography>
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item sm={6} xs={12}>
            <Button fullWidth variant="contained" color="primary" href="/product/men's%20clothing" component={Link} sx={{height:'25vh', borderRadius:'15px'}}>
              <Typography variant="h2">men's cloathing</Typography>
            </Button>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Button fullWidth variant="contained" color="secondary" href="/product/women's%20clothing" component={Link} sx={{height:'25vh',  borderRadius:'15px'}}>
              <Typography variant="h2">woman's clothing</Typography>
            </Button>
          </Grid>
        </Grid>

    </section>
  );
};

export default Home;