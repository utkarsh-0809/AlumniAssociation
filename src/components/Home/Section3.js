import lamp from '../../resources/images/casual-life-3d-idea-lamp 1.png';
import arrow from '../../resources/images/arrow.png'
import data from "../../resources/data/Sub_section3";
import Sub_section3 from "./Sub_section3";
function Section3(){
    return (
        <div className="h-[90vh] w-full  flex flex-col px-4">
            <div className="flex justify-between w-full h-24 ">
              <img  className="w-20 h-20"  src={lamp}></img>
              <div className="h-full w-2/3  flex flex-col justify-center items-center">
              <p className="text-3xl">Network for career growth!</p>
              <p className="text-md text-text-2"> Grow your professional network, connect with like-minded professionals, and advance your career.</p>
              </div>
              <img  className="w-24 h-30" src={arrow}></img>
            </div>
            <div className="w-full h-72 mt-8  px-24 flex justify-evenly">
              {
                data.map(val=>{
                  return <Sub_section3 heading={val.heading} content={val.content}></Sub_section3>
                })
              }
            </div>
          </div>
    )
}

export default Section3