import {useState, useEffect} from 'react'
import {HashLink} from 'react-router-hash-link'
import {BsFillArrowUpSquareFill, BsFillArrowDownSquareFill} from 'react-icons/bs'
import './Nav.css'

export default function Nav(){
    const [activeSection, setActiveSection] = useState('home')
    useEffect(()=>{const handleScroll=()=>{
        const scrollPosition = window.scrollY || document.documentElement.scrollTop
        const home = document.getElementById('home')
        const about = document.getElementById('about')
        const projects = document.getElementById('projects')
        const resume = document.getElementById('resume')
        const contact = document.getElementById('contact')
        switch(true){
            case scrollPosition > about.offsetTop:
                setActiveSection('home')
                break;
            case scrollPosition <= about.offsetTop && scrollPosition > projects.offsetTop:
                setActiveSection('about')
                break;
            case scrollPosition <= projects.offsetTop && scrollPosition > resume.offsetTop:
                setActiveSection('projects')
                break;
            case scrollPosition <= resume.offsetTop && scrollPosition > contact.offsetTop:
                setActiveSection('resume')
                break;
            case scrollPosition <= contact.offsetTop:
                setActiveSection('contact')
                break;
        }
        }
        window.addEventListener('scroll',handleScroll)
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])
     
    return (
        <nav className='navBar'>
            <HashLink smooth to='/#home'><button className={activeSection==='home' ? 'active' : 'active'}>Home</button></HashLink>
            <HashLink smooth to='/#about'><button className={activeSection==='about' ? 'active': 'button'}>About</button></HashLink>
            <HashLink smooth to='/#projects'><button className={activeSection==='about' ? 'active': 'button'}>Projects</button></HashLink>
            <HashLink smooth to='/#resume'><button className={activeSection==='about' ? 'active': 'button'}>Resume</button></HashLink>
            <HashLink smooth to='/#contact'><button className={activeSection==='about' ? 'active': 'button'}>Contact</button></HashLink>
        </nav>
    )
};