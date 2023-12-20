import './Entrance.css'
import gg1 from '../assets/gg1.jpg'
import gg2 from '../assets/gg2.png'
import gg3 from '../assets/gg3.jpg'
import gg4 from '../assets/gg4.png'

export function Entrance(){
    return (
        <div className='quick_entrance'>
        <a href=""><img src={gg1} alt="" /></a>
        <a href=""><img src={gg2} alt="" /></a>
        <a href=""><img src={gg3} alt="" /></a>
        <a href=""><img src={gg4} alt="" /></a>
      </div>
    )
}