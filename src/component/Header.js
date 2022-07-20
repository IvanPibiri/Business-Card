import React from "react";
import ProfileImg from "../Profile-img.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    return (
        <header>
            <img className="profile-img" src={ ProfileImg } alt="profile img" />
            <h1>Ivan Pibiri</h1>
            <p>Frontend Developer</p>
            <p>pibiriivan@gmail.com</p>
            <div className="btns">
                <a href="https://www.linkedin.com/in/ivan-pibiri-438b95145"><button className="btn-linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                </button></a>
                <a href="https://github.com/IvanPibiri"><button className="btn-github">
                    <FontAwesomeIcon icon={faGithub} />
                </button></a>
            </div>
        </header>
    )
}