import { useState } from "react";

const InputUser = () => {
    const [userendpoint, setUserendpoint] = useState('');
    const [userData, setUserData] = useState('')
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        const timer = setTimeout( async() => {
            setUserData(null);
            setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/users/${userendpoint.toLowerCase()}`)
                const data = await response.json();
                setUserData(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }, 1000);

        timer();

    }, [userendpoint])

    return (
        <>
            <input type="text" value={userendpoint} onChange={(e) => setUserendpoint(e.target.value)}/>
            {loading && <div>Loading...</div>}
            

        </>
    )
}

export default InputUser;

