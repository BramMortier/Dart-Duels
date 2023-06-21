import "./titlescreen.scss";

const Titlescreen = () => {
    return (
        <main className="title-screen">
            <div className="title-screen__container">
                <div className="title-screen__col">
                    <img src="/assets/logo.png" alt="dart duels logo" />
                    <button className="title-screen__start-btn">
                        Press any button to start
                        <span className="title-screen__start-btn-line"></span>
                    </button>
                </div>
                <div className="title-screen__col">
                    <img src="/assets/titlescreen.png" alt="titlescreen" />
                </div>
            </div>
        </main>
    );
};

export default Titlescreen;
