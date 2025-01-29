
import './App.css';
import TheNavBar from './components/MyNavBar';
import Home from './components/Home';
import Projects from './components/projects';
import Resume from './components/resume';
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
          <Route path = '/projects' element = {<Projects/>}/>
          <Route path ='/resume' element ={<Resume/>}/>
        </Routes>
      </main>
    </div>

  );
}

export default App;
