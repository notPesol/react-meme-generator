import React, { useEffect, useState } from 'react';

function Meme() {

    

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    });

    const handleChange = (event) => {
        const {value, name} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    const [allMemes, setAllMemes] = useState([]);

    const getNewMeme = () => {
        const random = Math.floor(Math.random() * allMemes.length);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[random].url
        }));
    }


    useEffect(() => {
        console.log("Effect ran");
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            .catch(err => console.error(err));
    }, [])

    return (
        <main>
            <div className="Meme" >
                <div className="Meme--input">
                    <input 
                        type="text" 
                        placeholder="Top text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText} />
                    <input 
                        type="text" 
                        placeholder="Bottom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText} />
                </div>
                <button onClick={getNewMeme}>Get a new meme image</button>
            </div>

            <div className="meme--box">
                <img className="meme--img" src={meme.randomImage} alt="meme" />
                <h2 className="meme--text topText">{meme.topText}</h2>
                <h2 className="meme--text bottomText">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

export default Meme;