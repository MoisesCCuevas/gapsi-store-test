/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { fetchData, setSearch } from './store/slices/dataSlice';
import { Container, Grid, Box } from '@mui/material';
import Product from './components/Product';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const products = useSelector((state: RootState) => state.data.products);
  const loading = useSelector((state: RootState) => state.data.loading);
  const sear = useSelector((state: RootState) => state.data.search);
  const page = useSelector((state: RootState) => state.data.page);
  const dispatch = useDispatch<AppDispatch>();

  const productsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchData({ search: "computer", page: 1 }));
    productsContainer.current?.addEventListener('scroll', handleScroll);
    return () => productsContainer.current?.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    dispatch(fetchData({ search: sear, page: 1 }));
  }, [sear]);

  function handleScroll() {
    if (productsContainer.current && productsContainer.current.getBoundingClientRect().bottom <= window.innerHeight) {
      dispatch(fetchData({ search: sear, page: page + 1 }));
    }
  }

  return (
    <Container>
      <h1>Store GAPSI</h1>
      <SearchBar onSearch={(value) => dispatch(setSearch(value))} />
      <Box sx={{ height: "50vh" , overflow: 'auto' }} ref={productsContainer}>
        <Grid container spacing={3}>
          {products.length > 0 && products.map((product: any) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
        {loading && <p>Loading...</p>}
      </Box>
    </Container>
  )
}

export default App
