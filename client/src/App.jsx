
import './App.css';
import TheNavBar from './components/MyNavBar';
import Home from './components/Home';
import Projects from './components/projects';
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
        </Routes>
      </main>
    </div>

  );
}

export default App;
