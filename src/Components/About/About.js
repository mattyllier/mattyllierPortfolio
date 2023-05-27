import vectImg from './vectImgAbout.png'
import './About.css'

export default function About(){
    return (
        <>
        <div className='aboutText'>
        <p>Welcome!</p>
        <p>I'm a JavaScript and React.js developer who is has had a lifelong interest in data, algorithms and numbers.</p>
        <p>My attention to detail and experience in decrypting patterns
            and solving logic-based problems</p>
        </div>
        <img src={vectImg} alt='' className='vectImg' id='vectImg'/>
        </>
    )
}