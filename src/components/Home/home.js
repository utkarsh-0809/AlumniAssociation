import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

import Button from "../Button";
import bulb from '../../resources/images/casual-life-3d-idea-lamp 1.png';
import arrow from '../../resources/images/orange arrow.png'
import Footer from "./Footer";

function Home(){
  const headline="Give us your";
  const content="your feedback on our application will help us to improve"
  const inputcontent="Type here...";
  const headline2="Feedback!"
    return (
        <div className=' h-fit w-full flex flex-col '>
          <Section1></Section1>
          <Section2></Section2>
          <Section3></Section3>
         
          <Section4></Section4>
          <Section5></Section5>
          <div className="h-64 w-[70%] mx-auto rounded-lg my-20 bg-purple-1 flex justify-center items-center text-white">
          <div className="h-48 w-96 flex flex-col justify-evenly">
            <p className="font-bold flex text-3xl translate-x-6">{headline} <p className="text-orange-600 ml-1">{headline2}</p></p>
            <p className="text-sm  translate-x-6 -translate-y-4">{content}</p>
            <div className="flex  h-10 w-full rounded-full justify-between items-center -translate-y-4   bg-white">
                {/* <CiSearch className="h-6 w-6 translate-x-2" ></CiSearch> */}
            <input type="text"  className="ml-2 border-0  h-full w-60 text-sm rounded-2xl p-2" placeholder={inputcontent}>
            </input>
            <Button  content="Send"></Button>
            </div>
        </div>
          </div>

          {/* <Footer></Footer> */}
        </div>
    )
}


export default Home;