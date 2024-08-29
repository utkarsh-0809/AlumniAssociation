function Sub_section4(props){
    let {content,src,name,job}=props
    return (
        <div className="h-full w-[31%] flex flex-col  p-5 shadow-xl">
            <p className="text-sm h-[70%] w-full text-text-2">{content}</p>
            <div className="flex">
                <img src={src}></img>
                <div className="flex flex-col ml-2">
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-text-2">{job}</p>
                </div>
            </div>
        </div>
    )
}

export default Sub_section4;