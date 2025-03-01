import './style.css'
import Title from './Title';
import AboutMe from './aboutMe';
// import despair from '../img/Despair.jpg'
import Button from 'react-bootstrap/Button'
// import {Image} from 'react-bootstrap'
import React, {useEffect} from "react";
import resume from '../img/Resume.pdf'
function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                
                else{
                    entry.target.classList.remove('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect(); // Clean up observer on unmount
    }, []);
    return (
        <div>
            
            <section className ="hidden">
                <Title/>
            </section>
            <section className= "hidden">
                <AboutMe/>
            </section>
            <section className = "hidden">
                <div>
                    <h2 className ='header2-text'>Gmail: jaejang2002@gmail.com</h2>
                </div>
                <div>
                    <Button href={resume} download className="resume-button">Download Copy of Resume</Button>
                </div>
            </section>
        </div>
    )
}
export default Home