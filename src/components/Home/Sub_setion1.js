import { CiSearch } from "react-icons/ci";
import Button from "../Button";

function Sub_section1(props){
    let {headline,headline2,content,inputcontent}=props;
    

    return(
        <div className="h-48 w-96 flex flex-col justify-evenly">
            <p className="font-bold flex text-4xl">{headline} <p className="text-orange-600 ml-1">{headline2}</p></p>
            <p className="text-sm font-semibold text-grey-1">{content}</p>
            <div className="flex  h-10 w-full rounded-full justify-between items-center  bg-white">
                <CiSearch className="h-6 w-6 translate-x-2" ></CiSearch>
            <input type="text"  className="ml-2 border-0  h-full w-60 text-sm" placeholder={inputcontent}>
            </input>
            <Button bg=" bg-purple-1 text-white" content="Search"></Button>
            </div>
        </div>
    )
}

export default Sub_section1