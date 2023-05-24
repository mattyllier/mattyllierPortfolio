import {HashLink} from 'react-router-hash-link'
import {useState, useEffect} from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import Nav from '../Nav/Nav'
import ScrollButtons from '../ScrollButtons/ScrollButtons'
//import BsGithub from 'react-icons/bs'
import './Home.css'
import Img from './myImg.jpg'

export default function Home(){
    return (
        <div>
            {/* <header id='nav' className='navBar'>
                <HashLink smooth to='/#about'><button className='button'>About</button></HashLink>
                <HashLink smooth to='/#projects'><button className='button'>Projects</button></HashLink>
                <HashLink smooth to='/#resume'><button className='button'>Resume</button></HashLink>
                <HashLink smooth to='/#contact'><button className='button'>Contact</button></HashLink>
            </header> */}
           {//<ScrollButtons id='scrollButtons'/>
           }
           <div id='nav'>
           <Nav/>
           </div>
            <div className='sections'>
                <div id='home' className='section'>
                    <h1>Matt Reilly</h1>
                    <img src={Img} className='myImg'></img>
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



//function NavBar() { 
 //   const [activeSection, setActiveSection] = useState('home'); 
  //  useEffect(() => { const handleScroll = () => {
         // Get the current scroll position 
    //     const scrollPosition = window.scrollY || document.documentElement.scrollTop; 
    // Determine the active section based on the scroll position // You can customize this logic based on your app's structure 
    //const homeSection = document.getElementById('home'); const aboutSection = document.getElementById('about'); 
    //const contactSection = document.getElementById('contact'); 
    //if (scrollPosition < aboutSection.offsetTop) { setActiveSection('home'); 
//} else if ( scrollPosition >= aboutSection.offsetTop && scrollPosition < contactSection.offsetTop ) 
//{ setActiveSection('about'); 
//} else { setActiveSection('contact'); } }; 
// Attach the event listener 
//window.addEventListener('scroll', handleScroll); 
// Clean up the event listener on component unmount return () => { window.removeEventListener('scroll', handleScroll); }; }, []); 
// ... return ( <nav> {/* navigation items */} </nav> ); } export default NavBar;
//function NavBar() { 
    // ... return ( <nav> <ul> <li className={activeSection === 'home' ? 'active' : ''
//} onClick={() => handleItemClick('home')
//} > Home </li> {/* other navigation items */} </ul> </nav> ); }