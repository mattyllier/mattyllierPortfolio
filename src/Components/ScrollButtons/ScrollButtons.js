import '../Nav/Nav.css'
import {BsFillArrowUpSquareFill, BsFillArrowDownSquareFill} from 'react-icons/bs'

export default function ScrollButtons(){
    const scrollUp = ()=>{
        window.scrollY -= 10
    }
    const scrollDown = ()=>{
       window.scrollY += 10 
    }
    return (
        <div id='scrollButtonPanel'>
        <BsFillArrowUpSquareFill className='button scrollButton toTop' onMouseEnter={scrollUp}/>
        <BsFillArrowDownSquareFill className='button scrollButton toTop' onMouseEnter={scrollDown}/>
        </div>
    )
}