import './style.css';
import React, {useState, useEffect, useRef}  from "react"
// import { Accordion } from 'react-bootstrap';
import git_icon from '../img/git-icon.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import {Image} from 'react-bootstrap';
// This is for hovering over icons, and showing the span text 
// for mobile phones, it should not even show the span
const GithubSpan = () => {
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
        <div>
            {isMobile && <SpanComponent/>}
        </div>
    );
}
const SpanComponent = () => {
    return <span className ="git-text">Github Link</span>;
};

// typing effect for the header of website
const TypingText = ({text, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1000}) => {
    const [isDeleting, setDeleting] = useState(false);
    const [displayText, setDisplayedText]  = useState("");
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const handleTyping = () => {
            // deleting the text
            if (isDeleting) {
                setDisplayedText((prev) => prev.slice(0, -1));
                if(displayText.length === 0) {
                    setDeleting(false);
                    if (index === text.length - 1){
                        setIndex(0)
                    }
                    else{
                        setIndex(index + 1) // moves to the next text
                    }
                }
            }
            // adding letters to the text
            else {
                // gets displayText length and increments it by one 
                // then gets the string from the text[index] from 0 ~ incremented length
                setDisplayedText((prev) => text[index].slice(0, prev.length + 1));
                if (displayText === text[index]) {
                    setTimeout(() => setDeleting(true), pauseTime); // Pause before deleting
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, text, index, typingSpeed, deletingSpeed, pauseTime]);

    return (
            <div className="typing">
                <h1 className = "header-text">{displayText}</h1>
            </div>
    );
};
// displaying the different clickable accordions
const DisplayAccordion = ({title, description, frontEnd, backEnd, url, isOpen, onClick}) => {
    const contentHeight = useRef()
    return(
        <div className = 'wrapper'>
            <button className={`question-container ${title} ${isOpen ? 'active' : ''}`} onClick={onClick} >
                <p className='question-content'>{title}</p>
                <RiArrowDropDownLine className={`arrow ${title} ${isOpen ? 'active' : ''}`} /> 
            </button>
            <div ref={contentHeight} className="answer-container" 
                style={
                    isOpen
                    ? { height: contentHeight.current.scrollHeight }
                    : { height: "0px" }
                }>
            <h3>Description:</h3>
            <p className="answer-content">{description}</p>
            <h3>Front-End:</h3>
            <ul>    
                {frontEnd.map((tool, index) => (
                    <li key = {index} className = "accordion-items">{tool}</li>
                ))}
            </ul>
            <h3>Back-End:</h3>
            <ul>
                {backEnd.map((tool, index) => (
                    <li key = {index} className = "accordion-items">{tool}</li>
                ))}
            </ul>

            <a href={url} target="_blank" rel="noopener noreferrer" className="hover-link">
                <Image src={git_icon} className ="git-Image"/>
                <GithubSpan/>
            </a>
            </div>
        </div>
    )
};

// overall page
const DisplayProjects = () => {
    const data = [
        {
            title: 'Jasmin      (Internship)',
            description: "Jasmin is website that allows users to connect with therapists based on mental health conditions. Users can become potential patients using the search feature, allowing them to filter therapists based on their specialties. Users can schedule appointments, send messages, and make video calls with their connected therapists. Potential Patients can even use the chatBot to ask mental health related questions. This website was done for and named after Jasmin, a non-profit organization located in Ukraine.",
            frontEnd: ['React.js', 'Material UI', 'Gemini', 'Whereby'],
            backEnd: ['MongoDB', 'Firebase', 'Express.js', 'Node.js'],
            url: 'https://github.com/jaejang02/jasmin'

        },
        {
            title: 'Jimbro      (Project)',
            description: "Jimbro is a website that allows users to schedule their weekly workouts with an online calendar. Users can also post their weekly workouts in thier community page and communicate with other people. For visual representation, pie charts is used to display the balance in a person's website, while line graphs are used to display the user's workout progress.",
            frontEnd: ['Bootstrap', 'Chart.js'],
            backEnd: ['MongoDB', 'Express.js', 'Node.js'],
            url: 'https://github.com/jaejang02/cs-546-fitness-app'
        },
        {
            title: 'Word-Boss       (Project)',
            description: "Word-Boss is a website that helps people learn and memorize words. This is to help children easily prepare for the SAT (Scholastic Aptitude Test) from an early age. The website contains multiple choice and fill-in the blank quizzes that test the person's knowledge of these high-level words. Users can even login using their emails to track their overall progrssion.",
            frontEnd: ['Bootstrap'],
            backEnd: ['MongoDB', 'Express.js', 'Bcryptjs', 'Node.js'],
            url: 'https://github.com/jaejang02/CS555-TEAM4-MOSS'
        },
        {
            title: 'Trvl       (Project)',
            description: "Trvl uses the Yelp-Api to allow users to create an iternary for their next coming trip. The intent of this website is to give users a platform to check-in for events, hotels, and restuarants all in one website.",
            frontEnd: ['React.js', 'ImageMagick', 'Material UI', 'MagicSearch'],
            backEnd: ['MongoDB', 'Express.js', 'Redis'],
            url: "https://github.com/jaejang02/cs-554-trvl"
        }
    ];
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div>
            <div className='middle-align'>
                <TypingText
                    text = {["Hello There!", "These are the list of my projects!", "Hope you find them intriguing!"]}
                    typingSpeed= {100}
                    deletingSpeed={50}
                    pauseTime ={1000}
                />
            </div>
            <div className='accordion'>
                {data.map((item, index) =>(
                    <DisplayAccordion
                        key ={index}
                        title ={item.title}
                        description ={item.description}
                        frontEnd = {item.frontEnd}
                        backEnd = {item.backEnd}
                        isOpen ={activeIndex === index}
                        url = {item.url}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>  
        </div>
    );
};

export default DisplayProjects;