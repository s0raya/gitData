import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo, setLoading } from './redux/userSlice.js'

const url= "https://api.github.com/users/carlosdiazgirol"

function App() {
  const dispatch = useDispatch();
  const userGit = useSelector((state) => state.user);
  const loading = useSelector((state) => state.user.loading)

  useEffect(() => {
    const fetchDataUser = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch(userInfo(data))
        //setUserData(data);
        
      } catch (error) {
        console.error(error)
      } finally {
        dispatch(setLoading(false));
      }
    }
    
    fetchDataUser();
  }, [dispatch]);

  //el dispatch hace que cada vez que se recaeguen los datos se reenvien  también 

  return (
    <>
    <h1>User Github</h1>
    <p>{userGit.name}</p>
    <p>{userGit.login}</p>
    <p>{userGit.followers}</p>
    <p>{userGit.public_repos}</p>
    <img src={userGit.avatar_url} alt={userGit.name} />
    </>
  );
}

export default App;
