import {BiLinkExternal} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import '../Projects/Projects.css'

function Encryptor({onClick}){
    return (
        <div id='encryptorProject' className={onClick ? 'modal' : 'hidden'}>
        <Link to='https://mattyllier.github.io/gameProject/' target='_blank'>
                Try It<BiLinkExternal className='linkIcon'/></Link>
        </div>
    )
}

export default Encryptor;