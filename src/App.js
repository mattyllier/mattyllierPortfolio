import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='about' element={<About/>}></Route>
        <Route path='projects' element={<Projects/>}></Route>
        <Route path='resume' element={<Resume/>}></Route>
        <Route path='contact' element={<Contact/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
