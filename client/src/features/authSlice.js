import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    user:null,
    token:null
}

const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.user=action.payload.user;
            state.token=action.payload.token;
        },
        setLogout:(state)=>{
           state.user=null;
           state.token=null;
        },
        updateUser:(state,action)=>{
            state.user=action.payload.user
        }
    }
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.numOfIcecreams--;
    //     },
    // },
    // extraReducers:(builder)=>{
    //     builder.addCase(cakeOrdered, (state)=>{
    //         state.numOfIcecreams--;
    //     })
    // }
})

export default authSlice.reducer
export const {setLogin,setLogou,updateUser} = authSlice.actions