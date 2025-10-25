import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';

const svgWidth = 100
const svgHeight = 100
export const contactData = [
    {
        icon: <FaLinkedin width={svgWidth} height={svgHeight} />,
        key: "linkedin.com/nick-roofthooft",
        value: "https://www.linkedin.com/in/nick-roofthooft-10b1a91a2/"
    },
    {
        icon: <FaGithubSquare width={svgWidth} height={svgHeight} />,
        key: "github.com/Meastrix001",
        value: "https://github.com/Meastrix001"
    },
    {
        icon: <FaEnvelopeSquare width={svgWidth} height={svgHeight} />,
        key: "nick.ebwebdesign@gmail.com",
        value: ""
    },
    // {
    //     icon: <FaPhoneSquare width={svgWidth} height={svgHeight} />,
    //     key: " + 123 456 789",
    //     value: ""
    // }
]