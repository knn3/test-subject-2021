const CallAPI = (req, res) => {
    fetch("https://test-subject-2021.herokuapp.com/hello_world");
}

function MainComponent() {  
    return (
        <button onClick={CallAPI}>
            Hello World
        </button>
    )
}

export default MainComponent;