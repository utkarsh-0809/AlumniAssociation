import Button from "../Button";

function Sub_section3(props){
    const {heading,content}=props;
    return (
        <div className="w-[25%] h-full mt-2  flex flex-col shadow-xl font-semibold p-4">
           <div className="w-full h-2/3 flex justify-start items-start text-[13px] p-8 text-text-2 "> {content}</div>
           <div className="w-full h-10 border-y-[1px] border-text-2 border-dashed flex justify-center text-xl items-center mb-2"> {heading}</div>
           <div className="w-full h-18  flex justify-between items-center text-xs">
                <div className="w-1/2 h-full flex items-center">
                    <p className="text-orange-600">80k+</p>
                    <p className="text-text-2 ">Jobs offered</p>

                </div>
                <div className="w-1/2 h-full flex items-center">
                    <p className="text-orange-600">2k+</p>
                    <p className="text-text-2 text-xs">Job openings</p>
                
                </div>

           </div>
           <div className=" translate-x-16 translate-y-64 absolute font-normal">
           <Button  h={"h-8"} w={"w-24"} content={"Join now"}></Button>
           </div>
        </div>
    )
}

export default Sub_section3