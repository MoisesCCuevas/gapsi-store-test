/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API = axios.create();

API.defaults.headers.common['x-rapidapi-key'] = import.meta.env.VITE_API_KEY;   

export const getProducts = async (keyword: string, page: number) => {
  const response = await API.get(`${import.meta.env.VITE_API_PRODUCTS}?keyword=${keyword}&page=${page}&sortBy=best_match`);
  const data = await response.data;
  let products = data.item?.props?.pageProps?.initialData?.searchResult?.itemStacks[0]?.items;
  products = products.filter((product: any) => product.__typename === "Product");
  return products; 
};