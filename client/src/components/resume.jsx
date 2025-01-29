import './style.css';
import despair from '../img/Despair.jpg'
const DisplayResume = () => {
    return(
        <div className ='middle-align'>
            <h1 className='header-text'>
                <a href ={despair} download>
                    Download Copy of My Resume
                </a>
            </h1>
        </div>
    );
}

export default DisplayResume