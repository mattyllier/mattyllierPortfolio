import {Link} from 'react-router-dom'
import {BsGithub} from 'react-icons/bs'
import './Contact.css'

function Contact(){
    return (
        <>
            Contact
        <div className='navBar'>
            <Link to='https://github.com/mattyllier'><BsGithub className='gitHub'/></Link>
        </div>
        </>
    )
}

export default Contact;