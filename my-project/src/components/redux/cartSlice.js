import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      // Check if item already exists in cart
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // If item exists, update its quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add new item with quantity
        state.cart.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    removefromCart: (state, action) => {
      state.cart = state.cart.filter(x => x.id !== action.payload.id)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    }
  }
});

export default cartSlice.reducer;
export const { addToCart, removefromCart, updateQuantity, clearCart } = cartSlice.actions;




// import axiosInstance from '../utils/axios';

// const API_URL = 'http://localhost:5000/api/cart';  // Ensure correct API base URL

// // Helper function to include auth token in headers

// const getAuthConfig = () => {
//     const token = localStorage.getItem('token');
//     console.log('Token being sent:', token); // Debug log
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     };
//   };

// // Async thunks
// export const fetchCart = createAsyncThunk(
//   'cart/fetchCart',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get(`${API_URL}`, getAuthConfig());
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Failed to fetch cart');
//     }
//   }
// );

// export const addToCart = createAsyncThunk(
//     'cart/addToCart',
//     async (itemData, { rejectWithValue }) => {
//       try {
//         const response = await axiosInstance.post(`${API_URL}/add`, itemData, getAuthConfig());
//         return response.data;
//       } catch (error) {
//         return rejectWithValue(error.response?.data || 'Failed to add item to cart');
//       }
//     }
//   );

// export const updateCartItem = createAsyncThunk(
//   'cart/updateCartItem',
//   async (updateData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.put(`${API_URL}/update`, updateData, getAuthConfig());
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Failed to update cart item');
//     }
//   }
// );

// export const removeFromCart = createAsyncThunk(
//   'cart/removeFromCart',
//   async (productId, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.delete(`${API_URL}/remove/${productId}`, getAuthConfig());
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Failed to remove item from cart');
//     }
//   }
// );

// export const clearCart = createAsyncThunk(
//   'cart/clearCart',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.delete(`${API_URL}/clear`, getAuthConfig());
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Failed to clear cart');
//     }
//   }
// );


// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//       items: [],
//       totalQuantity: 0,
//       totalAmount: 0,
//       loading: false,
//       error: null
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         // Fetch cart
//         .addCase(fetchCart.pending, (state) => {
//           state.loading = true;
//         })
//         .addCase(fetchCart.fulfilled, (state, action) => {
//           state.loading = false;
//           state.items = action.payload.items;
//           state.totalQuantity = action.payload.totalQuantity;
//           state.totalAmount = action.payload.totalAmount;
//         })
//         .addCase(fetchCart.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.payload;
//         })
//         // Add to cart
//         .addCase(addToCart.fulfilled, (state, action) => {
//           state.items = action.payload.items;
//           state.totalQuantity = action.payload.totalQuantity;
//           state.totalAmount = action.payload.totalAmount;
//         })
//         // Update cart item
//         .addCase(updateCartItem.fulfilled, (state, action) => {
//           state.items = action.payload.items;
//           state.totalQuantity = action.payload.totalQuantity;
//           state.totalAmount = action.payload.totalAmount;
//         })
//         // Remove from cart
//         .addCase(removeFromCart.fulfilled, (state, action) => {
//           state.items = action.payload.items;
//           state.totalQuantity = action.payload.totalQuantity;
//           state.totalAmount = action.payload.totalAmount;
//         })
//         // Clear cart
//         .addCase(clearCart.fulfilled, (state, action) => {
//           state.items = [];
//           state.totalQuantity = 0;
//           state.totalAmount = 0;
//         });
//     }
//   });
  
//   export default cartSlice.reducer;  // Ensure this is exported as default
  