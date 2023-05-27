import {useState} from 'react' // useEffect
import {Link} from 'react-router-dom'
import {BiPyramid, BiLinkExternal} from 'react-icons/bi' 
import {FaBrain} from 'react-icons/fa'
import {AiFillCalculator} from 'react-icons/ai'
import {RiNetflixFill} from 'react-icons/ri'
import Encryptor from '../Encryptor/Encryptor'
import Calculator from '../Calculator/Calculator'
import './Projects.css'

export default function Projects(){
    const [visible, setVisible] = useState(false)
    let hidden = true
    const handleClick=(e)=>{
        //console.log(e.target.id)
        if(e.target.className==='encryptorProject'){
            setVisible(true)
            hidden = false
        } else if(e.target.className==='calculatorProject'){
            setVisible('calculatorLink')
            hidden = false
        }
        // else{
        //     setVisible(false)
        //     hidden = true
        // }
    }
    return (
        <div className='projects'>   

            <div className='project encryptorProject' onClick={handleClick}>
                <FaBrain className='linkIcon encryptorProject'/>
                <div className='projectLink encryptorProject'>
                <span className='projectLink encryptorProject'>Encryptor & Solve the Phrase Game</span></div> 
            </div>
            <Encryptor className handleClick={handleClick}/>
            

            <div className='project' id='calculatorProject' onClick={handleClick}>
                <AiFillCalculator className='linkIcon'/>
                <div className='projectLink'>
                <span className='projectLink'>Unlimited-sized Operations Calculator</span></div>
            </div>
            <Calculator handleClick={handleClick}/>

            <div className='project' id='notNetflixProject' onClick={handleClick}>
                <RiNetflixFill className='linkIcon'/>
                <div className='projectLink'>
                <span className='projectLink'>NotNetflix API Project</span></div>
            </div>
            <div className={visible ? 'modal project' : 'hidden'}><Link className='modal' to='https://github.com/mattyllier/' target='_blank'>
                Try It<BiLinkExternal className='linkIcon'/></Link><button onClick={handleClick}>Close</button>
            </div>
            <div className='project' id='capstone' onClick={handleClick}>
                <BiPyramid className='linkIcon'/>
                <div className='projectLink'>
                <span className='projectLink'>Capstone</span></div>
            </div>
            <div className={visible ? 'modal project' : 'hidden'}><Link className='modal' to='https://github.com/mattyllier/' target='_blank'>
                Try It<BiLinkExternal className='linkIcon'/></Link><button onClick={handleClick}>Close</button>
            </div>
        </div>
    )
}