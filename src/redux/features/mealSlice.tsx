import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store';
import type { MealCardEntity } from '../../domain/entities/mealEntity';
import { getMeals } from '../../actions/meal/getMeals';

//Thunks
export const getAllMeals = createAsyncThunk(
    'meal/getAllMeals',
    async (thunkAPI) => {
        const response = await getMeals();
        return response
    }
)

interface MealState {
  status: 'loading' | 'success' | 'error';
  meals: MealCardEntity[];
}


const initialState: MealState = {
    meals: [],
    status: 'loading',  
}



export const MealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers:{},
  extraReducers: (builder) =>{
    builder
      .addCase(getAllMeals.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllMeals.fulfilled, (state, action) => {
        state.status = 'success'
        state.meals = action.payload
      })
      .addCase(getAllMeals.rejected, (state) => {
        state.status = 'error'
      })
  },
})

export const {  } = MealSlice.actions

export const selectMeal = (state: RootState) => state.meal

export default MealSlice.reducer