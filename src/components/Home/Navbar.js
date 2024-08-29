import { NavLink } from 'react-bootstrap';
import image from '../../resources/images/Group (1).png';
import Button from '../Button';
function Navbar(){
    return (
        <div className="w-full h-20 flex items-center justify-between">
            <div className='h-full w-fit flex items-center'>
            
            <img src={image} className='h-full w-20'></img>
            <p className='text-lg font-semibold  ml-3'>Alumini Association platform</p>
            </div>
            <div className='h-full w-1/2  text-sm flex justify-evenly font-semibold items-center'>
                <NavLink href='https://www.figma.com/design/iBz2lJBY5MvJ9rq3hNH9bn/Online-Education-Website-Free-Template-(Community)?node-id=0-1&node-type=CANVAS&t=9yoy6ExUU7wpe7Fi-0'>Home</NavLink>
                <button>News</button>
                <button>Doubt forum</button>
                <button>Job Portal</button>
                <button>Collborate</button>
                <Button bg=" bg-purple-1 text-white" content="Sign in"></Button>
            </div>
        </div>
    )
}

export default Navbar