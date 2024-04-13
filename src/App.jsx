import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from './redux/userSlice.js'
import InputUser from './components/Input.jsx'
import './App.css'


function App({username}) {
  const dispatch = useDispatch();
  const userGit = useSelector((state) => state.user);

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
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
      <section>
        <h2>Nombre: {userGit.name}</h2>
        <p>UserName: {userGit.login}</p>
        <p>Followers: {userGit.followers}</p>
        <p>Public Repos: {userGit.public_repos}</p>
        <img src={userGit.avatar_url} alt={userGit.name} />
      </section>
      <section>
        <InputUser />
      </section>
    </>
  );
}

export default App;
