import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from './redux/userSlice.js'

const url= "https://api.github.com/users/carlosdiazgirol"

function App() {
  const dispatch = useDispatch();
  const userGit = useSelector((state) => state.user);

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch(userInfo(data))
        
      } catch (error) {
        console.error(error)
      }
    }
    
    fetchDataUser();
  }, [dispatch]);

  //el dispatch hace que cada vez que se recarguen los datos se reenvien  también 

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
