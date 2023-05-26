import './Resume.css'
import DavImg from './davImg.jpg'

export default function Resume(){
    return (
        <div className='qualSect'>
        <h3>What Qualifies Me?</h3>
        <div>Being a graduate of Nebula Professional Development Academy, </div>
        <img src={DavImg} className='davImg'/>
        </div>
    )
}