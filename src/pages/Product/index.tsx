import { useEffect } from 'react'
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchAllCategory } from "../../store/slice/categorySlice";
import Container from "../../components/Container";
import { ProductInterface } from "../../store/interface/product.interface";

import CategoryContainer from "../../components/ProductContainer";
import CategoryCard from "../../components/ProductCard";

const ProductPage = () => {

  const dispatch = useAppDispatch();
  let { category } = useParams();

  const { categorys, status, error } = useAppSelector((state: any) => state.category);

  useEffect(() => {
    dispatch(fetchAllCategory(category)).unwrap();
  }, []);

  const data = categorys?.map((product: ProductInterface, key: number) => (<CategoryCard product={product} key={`category-key-${key}`}/>));


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
      <Typography variant="h4" sx={{textTransform:'capitalize'}}>{category}</Typography>
      <CategoryContainer isWrap={true}>
        {data}
      </CategoryContainer>
    </section>
  );
};

export default ProductPage;