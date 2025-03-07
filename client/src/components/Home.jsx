import './style.css'
import Title from './Title';
import AboutMe from './aboutMe';
import React, {useEffect} from "react";
import Project from './projects';
const  Home = ()=> {
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
            <section id = 'title' className ="hidden">
                <Title/>
            </section>
            <section id = 'aboutMe'className= "hidden">
                <AboutMe/>
            </section>
            <section id = 'projects' className= "hidden">
                <Project/>
            </section>
        </div>
    )
}
export default Home