import data1 from '../../resources/data/Sub_section4'
import data from "../../resources/data/Sub_section5";
import Sub_section5 from "./Sub_section5";
import Sub_section4 from "./Sub_section4";

import saturn from '../../resources/images/casual-life-3d-orange-planet-with-disk 1.png';
import arrow from '../../resources/images/Group.png';
import ellips from '../../resources/images/Ellipse 27.png'
import ellips2 from '../../resources/images/Ellipse 27 (1).png'


function Section5(){
    return (
        <div className="h-[150vh] w-full  flex flex-col px-28 justify-evenly ">
            <div className="w-full h-1/3 flex flex-col  items-center">
            <p className="text-3xl font-semibold">What Alumni’s say</p>
            <p className="text-sm text-text-2">Answers to common questions from expert alumni,  providing ,valuable insights to address user queries.</p>
            <div className="h-[70%] w-[90%] mt-5 flex justify-evenly items-center">
              {
                data1.map(val=><Sub_section4 content={val.content} job={val.job} src={val.src} name={val.name}></Sub_section4>)
              }
            </div>
            </div>
            <div className="w-full h-[50%]  flex flex-col  items-center pt-5">
             <p className="text-4xl font-semibold">Our Top Alumni’s</p>
             <p className="w-[50%]  text-sm text-center mt-2 text-text-2">    Distinguished alumni who have excelled in their fields, actively participated in the community, and made significant contributions.</p>
             <div className="h-[70%] w-full  mt-10 flex justify-between z-50">
              {
                data.map(val=><Sub_section5 src={val.src} content={val.content} college={val.college} insta={val.insta} linkdin={val.linkdin} name={val.name} degree={val.degree}  ></Sub_section5>)
              }
             </div>
            </div>
            <img className="absolute right-10 h-14 w-28 -translate-y-10" src={saturn}></img>
            <img className="absolute h-22 w-28 -translate-y-24  left-10" src={arrow}></img>
            <img className="absolute left-0 -z-10 h-[1000px] w-96" src={ellips}></img>
            <img className="absolute right-0 -z-10 h-[1000px] w-96" src={ellips2}></img>
          </div>
    )
}

export default Section5