import {HashLink} from 'react-router-hash-link'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import Nav from '../Nav/Nav'
//import BsGithub from 'react-icons/bs'
import './Home.css'

export default function Home(){
    return (
        <div>
            <header className='navBar'>
                <HashLink smooth to='/#about'><button className='button'>About</button></HashLink>
                <HashLink smooth to='/#projects'><button className='button'>Projects</button></HashLink>
                <HashLink smooth to='/#resume'><button className='button'>Resume</button></HashLink>
                <HashLink smooth to='/#contact'><button className='button'>Contact</button></HashLink>
            </header>
            <Nav/>
            <div className='sections'>
                <div className='section'>
                    Home
                </div>
                <div id='about' className='section'>
                    <About/>
                </div>
                <div id='projects' className='section'>
                    <Projects/>
                </div>
                <div id='resume' className='section'>
                    <Resume/>
                </div>
                <div id='contact' className='section'>
                    <Contact/>
                </div>
            </div>
        </div>
    )
}