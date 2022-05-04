import trollFaceImage from "../images/troll-face.png";

function Header() {
    return (
        <header className="Header">
            <div className="Header--logo">
                <img src={trollFaceImage} alt="troll-face" />
                <h3>Meme Generator</h3>
            </div>
            <div className="Header--logo">
                <p>React Course - Project 3</p>
            </div>
        </header>
    );
}

export default Header;