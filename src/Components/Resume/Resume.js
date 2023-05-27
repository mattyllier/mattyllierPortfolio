import {Link} from 'react-router-dom'
import {HiDocumentText} from 'react-icons/hi'
import './Resume.css'

export default function Resume(){
    return (
        <div className='qualSect'>
        <h3>What Qualifies Me?</h3>
        <div>Being a graduate of Nebula Professional Development Academy, </div>
        <Link to='https://docs.google.com/document/d/1C9fFjgrIMOsbN1585udqOLLfIiFXetNxmJimQJudpBc/edit?usp=sharing' target='_blank'>
            <HiDocumentText className='resumeLink'/>
        </Link>
        </div>
    )
}