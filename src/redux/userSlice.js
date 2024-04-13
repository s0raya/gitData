import {createSlice} from "@reduxjs/toolkit"; //importo createSlice

//Defino el estado inicial 
const initialState ={
    name:null,
    login: null,
    followers: null,
    public_repos: null,
    avatar_url: null,
    loading:false,
}

//Creo una sección cuyo nombre será user , añado el estado inicial
//el reducer es una función pura que toma el estado actual y una acción como argumentos y devuelve el nuevoestado 
//Es como un useState en react
//defino un setLoading ya que al ser una función asincrona a react puede no dar tiempo cargar un fetch
//y de esta forma mientras que cargue otra cosa sinó dará error 
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userInfo: (state, action) => {
            const { name, login, followers, public_repos, avatar_url } = action.payload
            state.name = name;
            state.login = login;
            state.followers = followers;
            state.public_repos = public_repos;
            state.avatar_url = avatar_url;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})


export const {userInfo, setLoading} = userSlice.actions;

export default userSlice.reducer;