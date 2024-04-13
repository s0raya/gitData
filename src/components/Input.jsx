import { useState, useEffect } from "react";

const InputUser = () => {
    const [userInput, setUserInput] = useState('');
    const [userData, setUserData] = useState(null)
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if(!userInput) return;

        const timer = setTimeout( async() => {
            setUserData(null);
            setLoading(true);
            setError('');
            try {
                const response = await fetch(`https://api.github.com/users/${userInput.toLowerCase()}`)
                if(!response.ok) throw new Error('Usuario no encontrado')
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        }, 1000);

        return () => clearTimeout(timer);

    }, [userInput])

    return (
        <>
            <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {userData ? (
                <div>
                    <h2>Nombre: {userData.name}</h2>
                    <p>UserName: {userData.login}</p>
                    <p>Followers: {userData.followers}</p>
                    <p>Public Repos: {userData.public_repos}</p>
                    <img src={userData.avatar_url} alt={userData.name} />
                </div>
            ): null }

        </>
    )
}

export default InputUser;

