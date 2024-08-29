function Sub_section2(props){
    const {heading,url,content}=props
    return (
        <div className="h-full w-1/3">
         <img className="h-10 w-10 z-10 absolute translate-x-[22px] translate-y-[52px] " src={url}></img>
        
        <div className="h-full w-full  flex justify-evenly pt-8 items-start ">
            <div className="h-16 w-16 translate-y-2 -z-10 bg-text-1 opacity-20 flex justify-center items-center rounded-lg">
            {/* <img className="h-10 w-10 z-10 relative " src={url}></img> */}
            </div>
            <div className="flex flex-col h-fit w-2/3 ml-1 justify-evenly">
             <p className="text-lg mb-2 text-white font-semibold">{heading}</p>
             <p className="text-[10px] text-text-1 opacity-60">{content}</p>
            </div>
        </div>
        </div>
    )
}

export default Sub_section2;