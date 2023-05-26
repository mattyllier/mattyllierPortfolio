import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {BiLinkExternal, BiPyramid} from 'react-icons/bi'
import {FaBrain} from 'react-icons/fa'
import {AiFillCalculator} from 'react-icons/ai'
import {RiNetflixFill} from 'react-icons/ri'
//import EncryptorIcon from './encryptorIcon.PNG'
import EncryptorImg from './encryptorImg1.PNG'
import CalculatorImg from './calculatorImg1.PNG'
import './Projects.css'

export default function Projects(){
    const [visible, setVisible] = useState(false)
    const handleHover=()=>{
        setVisible(true)
    }
    const offHover=()=>{
        setVisible(false)
    }
    return (
        <div>      
            <div className='project' id='encryptorProject'>
                <FaBrain className='linkIcon' onMouseEnter={handleHover} onMouseLeave={offHover}/>
                <div className='projectLink'>
                <span className='projectLink'>Encryptor & Solve the Phrase Game</span></div>
                {/* <div className={visible ? 'modal' : 'hidden'}><p>Encryptor & Solve the Phrase Game</p>
                <p className='modalText2'>Click to Learn More</p></div>
                <Link target='_blank' className='hidden' to='https://mattyllier.github.io/gameProject/'>
                    Encryptor & Solve the Phrase Game
                    <div className='enterLink'>Try It<BiLinkExternal className='linkIcon'/></div>
                    <img src={EncryptorImg} className='encryptorImg'/></Link> */}
            </div>
            <div className='project' id='calculatorProject'>
                <AiFillCalculator className='linkIcon' onMouseEnter={handleHover} onMouseLeave={offHover}/>
                <div className='projectLink'>
                <span className='projectLink'>Unlimited-sized Operations Calculator</span></div>
                {/* <div className={visible ? 'modal' : 'hidden'}><p>Unlimited Operations Calculator</p>
                <p className='modalText2'>Click toLearn More</p></div>
                <Link target='_blank' className='hidden' to='https://mattyllier.github.io/calculator-project/'>
                    Unlimited-sized Operations Calculator
                    <p className='enterLink'>Try It<BiLinkExternal className='linkIcon'/></p>
                    <img src={CalculatorImg} className='encryptorImg'/></Link> */}
            </div>
            <div className='project' id='notNetflixProject'>
                <RiNetflixFill className='linkIcon' onMouseEnter={handleHover} onMouseLeave={offHover}/>
                <div className='projectLink'>
                <span className='projectLink'>NotNetflix API Project</span></div>
                {/* <div className={visible ? 'modal' : 'hidden'}><p>NotNetflix Database Project</p>
                <p className='modalText2'>Click to Learn More</p></div> */}
            </div>
            <div className='project' id='capstone'>
                <BiPyramid className='linkIcon' onMouseEnter={handleHover} onMouseLeave={offHover}/>
                <div className='projectLink'>
                <span className='projectLink'>Capstone</span></div>
                {/* <div className={visible ? 'modal' : 'hidden'}><p>Capstone Project</p>
                <p>Click to Learn More</p></div> */}
            </div>
        </div>
    )
}