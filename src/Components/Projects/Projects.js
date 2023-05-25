import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BiLinkExternal} from 'react-icons/bi'
import {FaBrain} from 'react-icons/fa'
import {CiCalculator2} from 'react-icons/ci'
//import EncryptorIcon from './encryptorIcon.PNG'
import EncryptorImg from './encryptorImg1.PNG'
import CalculatorImg from './calculatorImg1.PNG'
import './Projects.css'

export default function Projects(){
    //className = onmouseEnter ? peek : default
    //onMouseLeave

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <h1 id='projectsHeader'>Projects</h1>      
            <div className='project' id='encryptorProject'>
                <FaBrain className='linkIcon'/>
                <Link target='_blank' className='link' to='https://mattyllier.github.io/gameProject/'>
                    Encryptor & Solve the Phrase Game
                    <div className='enterLink'>Try It<BiLinkExternal className='linkIcon'/></div>
                    <img src={EncryptorImg} className='encryptorImg'/></Link>
            </div>
            <div className='project' id='calculatorProject'>
                <CiCalculator2 className='linkIcon'/>
                <Link target='_blank' className='link' to='https://mattyllier.github.io/calculator-project/'>
                    Unlimited-sized Operations Calculator
                    <p className='enterLink'>Try It<BiLinkExternal className='linkIcon'/></p>
                    <img src={CalculatorImg} className='encryptorImg'/></Link>
            </div>
        </div>
    )
}