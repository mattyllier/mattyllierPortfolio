import {useState, useEffect} from 'react'
import {HashLink} from 'react-router-hash-link'
// import {BsFillArrowUpSquareFill, BsFillArrowDownSquareFill} from 'react-icons/bs'
import './Nav.css'

export default function Nav(){
    const [activeSection, setActiveSection] = useState('home')
    useEffect(()=>{const handleScroll=()=>{
        const scrollPosition = window.scrollY || document.documentElement.scrollTop
        const about = document.getElementById('about')
        const projects = document.getElementById('projects')
        const resume = document.getElementById('resume')
        const contact = document.getElementById('contact')
        const shift = window.innerHeight/2
        switch(true){
            case scrollPosition < about.offsetTop-shift:
                setActiveSection('home')
                break;
            case scrollPosition >= about.offsetTop-shift && scrollPosition < projects.offsetTop-shift:
                setActiveSection('about')
                break;
            case scrollPosition >= projects.offsetTop-shift && scrollPosition < resume.offsetTop-shift:
                setActiveSection('projects')
                break;
            case scrollPosition >= resume.offsetTop-shift && scrollPosition < contact.offsetTop-shift:
                setActiveSection('resume')
                break;
            case scrollPosition >= contact.offsetTop-shift:
                setActiveSection('contact')
                break;
            default:
                setActiveSection('home')
                break;
        }
        }
        window.addEventListener('scroll',handleScroll)
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])
     console.log(activeSection)
    return (
        <nav className='navBar'>
            <HashLink smooth to='/#home'><button className={activeSection==='home' ? 'active' : 'button'}>Home</button></HashLink>
            <HashLink smooth to='/#about'><button className={activeSection==='about' ? 'active': 'button'}>About</button></HashLink>
            <HashLink smooth to='/#projects'><button className={activeSection==='projects' ? 'active': 'button'}>Projects</button></HashLink>
            <HashLink smooth to='/#resume'><button className={activeSection==='resume' ? 'active': 'button'}>Resume</button></HashLink>
            <HashLink smooth to='/#contact'><button className={activeSection==='contact' ? 'active': 'button'}>Contact</button></HashLink>
        </nav>
    )
};