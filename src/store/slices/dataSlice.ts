/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from '../../api';

interface CounterState {
  page: number,
  products: any[],
  loading: boolean,
  search: string
}

const initialState: CounterState = {
  page: 1,
  products: [],
  loading: false,
  search: "computer"
}

interface FetchDataProps {
  search: string;
  page: number;
}

export const fetchData = createAsyncThunk("data/fetchData", async ({ search, page }: FetchDataProps, thunkAPI) => {
  const { dispatch } = thunkAPI;
  dispatch(setLoading(true));
  const response = await getProducts(search, page);
  dispatch(setPage(page));
  dispatch(setData(response));
  dispatch(setLoading(false));
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setData: (state, action: PayloadAction<unknown[]>) => {
      const products = [...state.products, ...action.payload];
      const unicProducts = products.filter((product: any, index: number, self: any) => {
        return index === self.findIndex((t: any) => t.id === product.id)
      });
      state.products = unicProducts;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.products = [];
      state.search = action.payload;
    }
  },
})

export const { setPage, setLoading, setData, setSearch } = dataSlice.actions
export default dataSlice.reducer
