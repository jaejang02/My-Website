
import './App.css';
import TheNavBar from './components/MyNavBar';
import Home from './components/Home';
import Resume from './components/resume';
// import Projects from './components/projects';
// import AboutMe from './components/aboutMe';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      <header>
        <TheNavBar/>
      </header>
      <main>
        <Routes>
          <Route path ='/' element = {<Home/>}/>
          <Route path ='/resume' element = {<Resume/>}/>
        </Routes>
      </main>
    </div>

  );
}

export default App;
