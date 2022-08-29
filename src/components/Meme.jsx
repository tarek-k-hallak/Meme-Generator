import React from "react"
import memesData from "../memesData"

export default function Meme() {
    const data = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * data.length)
    const intitialMemeUrl = data[randomNumber].url

    const [Meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: intitialMemeUrl
    })

    function getNewMeme() {
        const randomNumber = Math.floor(Math.random() * data.length)
        const newUrl = data[randomNumber].url
        setMeme(prevMemeState => {
            return {
                ...Meme,
                url: newUrl
            }
        })
        console.log(Meme.url)
    }

    function handelChange(event) {
        const { name, value } = event.target
        setMeme(prevMemeState => {
            return {
                ...Meme,
                [name]: value
            }
        })
        console.log(Meme)
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={Meme.topText}
                    onChange={handelChange} />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={Meme.bottomText}
                    onChange={handelChange} />
                <button
                    className="form--button"
                    onClick={getNewMeme}>
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={Meme.url} className="meme--image" />
                <h2 className="meme--text top">{Meme.topText}</h2>
                <h2 className="meme--text bottom">{Meme.bottomText}</h2>
            </div>
        </main>
    )
}