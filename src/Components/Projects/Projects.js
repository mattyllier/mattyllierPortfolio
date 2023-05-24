import {Link} from 'react-router-dom'
import {BiLinkExternal} from 'react-icons/bi'
import {CiCalculator2} from 'react-icons/ci'
//import EncryptorIcon from './encryptorIcon.PNG'
import EncryptorImg from './encryptorImg1.PNG'
import CalculatorImg from './calculatorImg1.PNG'
import './Projects.css'

export default function Projects(){
    return (
        <div>
            <h1>Projects</h1>      
            <div id='encryptorProject'>
                <Link className='link' to='https://mattyllier.github.io/gameProject/'>
                    Encryptor & Solve the Phrase Game
                    <BiLinkExternal className='linkIcon'/>
                    <img src={EncryptorImg} className='encryptorImg'/></Link>
            </div>
            <CiCalculator2/>
            <div id='calculatorProject'>
                <Link className='link' to='https://mattyllier.github.io/calculator-project/'>
                    Unlimited-sized Operations Calculator
                    <BiLinkExternal className='linkIcon'/>
                    <img src={CalculatorImg} className='encryptorImg'/></Link>
            </div>
        </div>
    )
}