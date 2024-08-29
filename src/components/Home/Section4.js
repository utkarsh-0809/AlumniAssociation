import girl from '../../resources/images/OBJECTS (1).png'
import calender from '../../resources/images/Calender.png'
function Section4(){
    return (
        <div className="w-full h-96 bg-skin-1 flex  items-center justify-center ">
          <div className="w-1/2 h-[80%] flex  items-center justify-center background ">
            <img src={girl} className="w-1/2 h-full"></img>
          </div>
          <div className="w-1/2 h-[80%] flex flex-col pl-32">
          <p className="text-3xl font-bold text-orange-600">Events Calender</p>
          <p className="text-sm text-text-2">Stay organized with the upcoming events, sessions, and reunions.</p>
          <p className="text-xl font-bold  translate-y-3">Sept 2024</p>
          <img src={calender} className="h-72 w-80 -translate-x-6"></img>
          </div>
          </div>
    )
}

export default Section4;