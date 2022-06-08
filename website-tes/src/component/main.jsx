import { response } from "express";

const CallAPI = () => {
    const res = await fetch(`https://test-subject-2021.herokuapp.com/hello_world`).then((response) => response.json());
    console.log(res);
    return  res;
}

function MainComponent() {  
    return (
        <button onClick={CallAPI}>
            Hello World
        </button>
    )
}

export default MainComponent;