
import './style.css'
import gitIcon from'../img/git-icon.png';
import gmailIcon from '../img/gmail.png';
import linkedin from '../img/linkedin.png';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, {useState, useEffect}  from "react"
const GithubSpan = ({input}) => {
    const [isMobile, setMobile] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        // checks the size of the window
        const handleResize = () => {
            setMobile(window.innerWidth >= 1024);
        };
        // clears memory for everytime called
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize);
    },  []);

    return (
        // making sure it's pc monitor
        // hovering effect only appears for pc
        <div>
            {isMobile && <SpanComponent output = {input}/>}
        </div>
    );
}
const SpanComponent = ({output}) => {
    return <span className ="git-text">{output}</span>;
};
const Title = () => {
    const data = ["Jae's Github", "Jae's LinkedIn", "jaejang2002@gmail.com"]
    return (
        <div>
            <div className="typing">
                <h1 className ='header-text'>Hello, My Name is Jae Hong Jang and welcome to my website!</h1>
            </div>
            <div className ="middle-align">
                <Link to="https://github.com/jaejang02" rel="noopener noreferrer" target = "_blank" className='hover-link'>
                    <Image src = {gitIcon} className = "icons"/>
                    <GithubSpan input={data[0]}/>
                </Link>
                <Link to="https://www.linkedin.com/in/jae-hong-jang-440420250/" rel="noopener noreferrer" target = "_blank" className ="hover-link">
                    <Image src = {linkedin} className = "icons"></Image>
                    <GithubSpan input={data[1]}/>
                </Link>
                <Link className = "hover-link">
                    <Image src = {gmailIcon} className ="icons"></Image>
                </Link>
            </div>
        </div>
    );
};

export default Title