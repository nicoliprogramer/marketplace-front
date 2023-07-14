import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosBack } from '../../api/back.api';
import Swal from 'sweetalert2'

export interface AuthProps {
    username:     string;
    email:    string;
}

const initialState : AuthProps = {username: "", email: ""}

export const login = createAsyncThunk(
  'auth/LOGIN',
  async (body: any, {dispatch}: any): Promise<void> => {
    try {
      const response = await axiosBack.post("/users/login", body)
    if(response.status === 200 || response.status === 201){
        Swal.fire({
                title: 'Bienvenido!',
                text: 'you are part of the community',
                icon: 'success',
                showConfirmButton: false,
                timer: 1400
              })
      
        localStorage.setItem("token", response.data.token)
    }
    } catch (error) {
          const err:any=error;
          if(err.response.status === 400){
            Swal.fire({
                title: 'Are you sure?',
                text: 'user data not found',
                icon: 'warning',
                confirmButtonText: 'Understand!'
              })
          }
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

