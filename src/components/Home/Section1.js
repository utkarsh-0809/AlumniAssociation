import Sub_section1 from './Sub_setion1';
import image from '../../resources/images/OBJECTS.png';
import Navbar from './Navbar';
function Section1(){
    return (
        <div className='w-full h-screen bg-skin-1 flex flex-col px-10 '>
        <Navbar></Navbar>
        <div className='h-96 w-full background  flex justify-evenly items-center'>

         <Sub_section1 headline={"Alumni"} headline2={"Connect"} content={"Strengthening connections and networking between Alumni and the Institute!"}
         inputcontent={"Search by  name, interests and more..."}
         ></Sub_section1>

         <img src={image} className=' bg-skin-1 h-60 w-96 z-10'></img>
        </div>
        
      </div>
    )
}

export default Section1;