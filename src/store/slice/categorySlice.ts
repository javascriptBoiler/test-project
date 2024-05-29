import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CategoryState {
    categorys: string[];
    status: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
}

const initialState: CategoryState = {
    categorys: [],
    status: "idle",
    error: null,
};

export const fetchAllCategory:any = createAsyncThunk<
    string[],
    undefined,
    { rejectValue: string }
>("category/fetchAllCategory", async (categorie, thunkAPI) => {
    try {
        const category = await axios.get(`${import.meta.env.VITE_SERVER_PATH}/products/category/${categorie}`);
        return category.data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCategory.pending, (state) => {
                if (state.categorys?.length === 0) {
                    state.status = "pending";
                }
            })
            .addCase(fetchAllCategory.fulfilled, (state, action) => {
                if (state.categorys?.length === 0) {
                    state.categorys = action.payload;
                }
                state.status = "succeeded";
            })
            .addCase(fetchAllCategory.rejected, (state) => {
                state.status = "failed";
                state.error = "Something went wrong!";
            });
    },
});

export const { } = categorySlice.actions;
export default categorySlice.reducer;