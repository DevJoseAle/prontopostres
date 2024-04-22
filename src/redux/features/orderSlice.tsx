import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store';
import { OrderEntity } from '../../domain/entities/orderEntity';
import { StorageAdapter } from '../../config/adapters/storage-adapter';

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (data: OrderEntity , thunkAPI) => {

    try {
      const existingDataJSON = await StorageAdapter.getItem('orders');
      let existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
  
      existingData = [...existingData, data];

      
       await StorageAdapter.removeItem('orders');
       await StorageAdapter.setItem('orders', JSON.stringify(existingData));
  
  
      return existingData
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  
  }
)

interface OrdersState {
  status: 'loading' | 'success' | 'error';
  orders: OrderEntity[];
} 
  


const initialState: OrdersState = {
    orders: [],
    status: 'loading',  
}



export const OrdersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers:{

  },
  extraReducers: (builder) =>{
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = 'success'
        state.orders = [...state.orders, action.payload];
        
      })
      .addCase(createOrder.rejected, (state) => {
        state.status = 'error'
      })
  },
})


export const selectOrders = (state: RootState) => state.order

export default OrdersSlice.reducer