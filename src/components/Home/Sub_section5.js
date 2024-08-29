function Sub_section5(props){
    let {src,insta,linkdin,name,degree,college,content}=props
    return (
        <div className="h-full w-[30%] flex flex-col justify-between text-sm p-4 rounded-lg shadow-2xl z-50">
            <img src={src} className="w-full h-1/2 z-50"></img>
            <div className="w-full h-[13%]  flex flex-col">
                <p className="font-semibold">{name}</p>
                <p className="text-xs text-text-3 font-semibold">{college}</p>
            </div>
            <div className="w-full h-[13%]  text-xs text-text-2">
                {content}
            </div>
            <div className="w-full h-[13%]  flex justify-between">
                <p className="text-xs text-orange-600 font-semibold">{degree}</p>
                <div className="flex justify-between w-[30%] h-[50%]">
                <img src={insta}></img>
                <img src={linkdin}></img>
                </div>
                
            </div>
        </div>
    )
}

export default Sub_section5