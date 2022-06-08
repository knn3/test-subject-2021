function LandingPage() {

    const CallAPI = async () => {
        console.log("You are running");
        const res = await fetch(
            "https://test-subject-2021.herokuapp.com/hello_world"
        );
        const msg = JSON.stringify(res);
        console.log(msg);
    }

    return (
        <div>
            <button onClick={CallAPI}>Hello World</button>
        </div>
    )
}

export default LandingPage;