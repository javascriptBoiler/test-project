import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductInterface } from "../interface/product.interface";

interface ProductState {
    products: ProductInterface[];
    status: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    status: "idle",
    error: null,
};

export const fetchAllProducts = createAsyncThunk<
    ProductInterface[],
    undefined,
    { rejectValue: string }
>("product/fetchAllProducts", async (_, thunkAPI) => {
    try {
        const products = await axios.get("https://fakestoreapi.com/products");
        return products.data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                if (state.products?.length === 0) {
                    state.status = "pending";
                }
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                if (state.products?.length === 0) {
                    state.products = action.payload;
                }
                state.status = "succeeded";
            })
            .addCase(fetchAllProducts.rejected, (state) => {
                state.status = "failed";
                state.error = "Something went wrong!";
            });
    },
});

export const { } = productSlice.actions;
export default productSlice.reducer;