import {Link} from 'react-router-dom'
import {BiLinkExternal} from 'react-icons/bi'

export default function Calculator({handleClick}){
    return (
        <div id='calculatorProject'>
            <Link id='calculatorLink' className={handleClick ? 'modal project' : 'hidden'} to='https://mattyllier.github.io/calculator-project/' 
            target='_blank'>Try It<BiLinkExternal className='linkIcon'/></Link>
        </div>
    )
}