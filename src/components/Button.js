function Button(props){
    let bg=props.bg;
    if(!bg) bg='bg-orange-600  text-white';
    let content=props.content;
    if(!content) content="join now"

    let {h,w}=props;
    if(!h) h="h-10"
    if(!w) w="w-24"
    return (
        <button className={" rounded-full " +bg+" "+h+" "+w}>
            {content}
        </button>
    )
}

export default Button