import {Link} from 'react-router-dom'
import {BsGithub} from 'react-icons/bs'
import './Contact.css'

function Contact(){
    return (
        <>
            Contact
            <Link to='https://github.com/mattyllier'><BsGithub className='gitHub'/></Link>
        </>
    )
}

export default Contact;