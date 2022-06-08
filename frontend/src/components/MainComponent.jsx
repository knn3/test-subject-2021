function LandingPage() {

    const CallAPI = () => {
        console.log("You are running");
        const res = fetch(
            "https://test-subject-2021.herokuapp.com/hello_world"
        ).then((response) => response.json());

        console.log(res);
    }

    return (
        <div>
            <button onClick={CallAPI}>Hello World</button>
        </div>
    )
}

export default LandingPage;