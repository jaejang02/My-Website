import './style.css'
import {Image} from 'react-bootstrap';
import profile from '../img/pr.jpg';
function AboutMe() {

    return (
        <div className='about-container'>
            <div className ='about-fixing-image'>
                <Image src ={profile} className ="about-Image"fluid></Image>
            </div>
            <div className ='about-text'>
                <h1>A little about me</h1>
                <p>Hello, my name is Jae Hong Jang and I recently 
                    graduated from Stevens Institute of Technology with a 
                    Bachelor's Degree in Computer Science.
                    I have a little a year in Web Development and currently looking
                    for a position as a Full Stack Engineer. Ever since college, 
                    making websites have become my passion and hoping it becomes my profession.
                </p> 
            </div>
        </div>
    );
}

export default AboutMe