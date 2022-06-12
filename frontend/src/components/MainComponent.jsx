import { useState } from 'react';
import NavBar from './NavBar';


function LandingPage() {

    const [msg, setMSG] = useState('');

    const CallAPI = async () => {
        console.log("You are running");
        const res = await fetch(
            "https://test-subject-2021.herokuapp.com/hello_world"
        ).then((response) => {
            return response.json();
        });
        setMSG(res.greeting);
    };

    return (
        <div>
            <button onClick={CallAPI}>Hello World</button>
            <p>{msg}</p>
        </div>
    );
}

export default LandingPage;
