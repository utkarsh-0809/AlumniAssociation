import data from "../../resources/data/Sub_section2";
import Sub_section2 from "./Sub_section2";

function Section2(){
    return (
        <div className="h-40 w-2/3 mx-auto -translate-y-20 bg-purple-1 flex rounded-lg">
          {
            data.map(val=>{
              return <Sub_section2 heading={val.heading} url={val.url} content={val.content}></Sub_section2>
            }
            )
            
          }
        
          </div>
    )
}

export default Section2