import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    name:null,
    login: null,
    followers: null,
    public_repos: null,
    avatar_url: null,
    loading:false,
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userInfo: (state, action) => {
            state.name = action.payload;
            state.login = action.payload;
            state.followers = action.payload;
            state.public_repos = action.payload;
            state.avatar_url = action.payload;
        },
    }
})


export const {userInfo} = userSlice.actions;

export default userSlice.reducer;