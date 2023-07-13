import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosBack } from '../../api/back.api';

export interface AuthProps {
    username:     string;
    email:    string;
}

const initialState : AuthProps = {username: "", email: ""}

export const login = createAsyncThunk(
  'auth/LOGIN',
  async (body: any, {dispatch}: any): Promise<void> => {
    const response = await axiosBack.post("/users/login", body);
    if(response.status === 200 || response.status === 201){
        console.log("Usuario valido", response.data);
        localStorage.setItem("token", response.data.token)
    }
    else if(response.status === 400){
            console.log("Error");
    }
    else{
        console.log("Error");
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: builder  =>{
      builder
      .addCase(login.fulfilled,(state: any,action: any) => {
        console.log("action", action);
      })
  },
})

// export const { addToCart, incrementQuantity, decrementQuantity, removeItem} = cartSlice.actions


export const authReducer = authSlice.reducer

