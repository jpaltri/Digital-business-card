
import React from "react"

export default function Info() {  // The function defines the component
    return (
        <div className="info">
            <img src="./img.png" alt="profile picture" className="about--img" />
            <h2 className="about--name">Julien Paltrinieri</h2>
            <h3 className="about--title">Frontend Developer</h3>
            <p className="about--website">julienpaltrinieri website</p>
            <div className="about--btns">
                <button className="about--btn--white">
                    <img src="./email-icon.png" className="img-icon" alt="email icon" />
                    <p className="about--btn--white--text">Email</p>
                </button>
                <button className="about--btn--blue">
                    <img src="./linkedin-icon.png" className="img-icon" alt="linkedin icon" />
                    <p className="about--btn--blue--text">LinkedIn</p>
                </button>
            </div>
        </div>
    )
}


