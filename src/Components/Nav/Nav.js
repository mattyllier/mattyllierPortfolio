import {HashLink} from 'react-router-hash-link'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
import Home from '../Home/Home'
import './Nav.css'

export default function Nav(){
    return (
        <header className='sideNav'>
            <HashLink smooth to='/'><BsFillArrowUpSquareFill className='button toTop'/></HashLink>
            <HashLink smooth to='/#about'><button className='button sideButton'>About</button></HashLink>
            <HashLink smooth to='/#projects'><button className='button sideButton'>Projects</button></HashLink>
            <HashLink smooth to='/#resume'><button className='button sideButton'>Resume</button></HashLink>
            <HashLink smooth to='/#contact'><button className='button sideButton'>Contact</button></HashLink>
    </header>
    )
};