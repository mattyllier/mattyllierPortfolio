import {Link} from 'react-router-dom'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {SiGmail, SiCodewars, SiLeetcode} from 'react-icons/si'
import Moai from './three-moai.png'
import './Contact.css'

function Contact(){
    return (
        <>
            <h3>Connect With Me</h3>
            <div className='contactSection'>
                <div>
                    <Link to='https://github.com/mattyllier' target='_blank' className='link'>GitHub 
                    <BsGithub className='linkIcon'/></Link>
                </div>
                <div>
                    <Link to='https://linkedin.com/in/mattyllier' target='_blank' className='link'>Linkedin 
                    <BsLinkedin className='linkIcon'/></Link>
                </div>
                <div>
                    <a target='_blank' href='mailTo:iamttyller@gmail.com' id='mailTo' className='link'>Email 
                    <SiGmail className='linkIcon'/></a>
                </div>
                <div>
                    <Link to='https://www.codewars.com/users/mattyllier' target='_blank' className='link'>Codewars 
                    <SiCodewars className='linkIcon'/></Link>
                </div>
                <div>
                    <Link to='https://leetcode.com/mattyllier/' target='_blank' className='link wideRow'>Leetcode 
                    <SiLeetcode className='linkIcon'/></Link>
                </div>
                <div>
                    <img src={Moai} className='moai'></img>
                </div>
            </div>
        </>
    )
}

export default Contact;