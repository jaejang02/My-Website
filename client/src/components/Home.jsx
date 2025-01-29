import './style.css'
import Title from './Title';
import AboutMe from './aboutMe';
function Home() {
    return (
        <div>
             <div className = "middle-align">
                <Title/>
            </div>
            <div className = "middle-align">
                <AboutMe/>
            </div>
            <div className ="middle-align"> 
                <div class="typing">
                    <h2 className ='header2-text'>Gmail: jaejang2002@gmail.com</h2>
                </div>
            </div>
        </div>
    )
}
export default Home