import vectImg from './vectImgAbout.png'
import './About.css'

export default function About(){
    return (
        <>
        <div>
        <p>Welcome!</p>
        <p>I'm a JavaScript and React.js developer who is has had a lifelong interest in data, algorithms and numbers.</p>
        <p>My attention to detail and experience in decrypting patterns
            and solving logic-based problems,  applied in my hobby of learning languages, decoding ciphers and even keeping track of license 
            plate serial patterns</p>
        </div>
        <img src={vectImg} className='vectImg'/>
        </>
    )
}