import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <button>
                <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button>
                <FontAwesomeIcon icon={faFacebook} />
            </button>
            <button>
                <FontAwesomeIcon icon={faInstagram} />
            </button>
        </footer>
    )
}