import type { Dispatch, SetStateAction } from "react";
import TechCards from "../techCards/TechCards";
import type { ItechType } from "../techTypes";

interface IAvailableProps{
    technologies:ItechType[]
     selectedTechs:ItechType[]
    setSelectedTechs:Dispatch<SetStateAction<ItechType[]>>
}

const Available = ({ technologies, selectedTechs, setSelectedTechs }:IAvailableProps) => {
    return ( 
    

    <div className="grid grid-cols-3 gap-9">

        <div className=" col-span-2 mt-12">

        <TechCards technologies={technologies}  selectedTechs={selectedTechs}
                setSelectedTechs={setSelectedTechs}></TechCards>

        
    </div>

    
   
    </div>
    );

        };

    

export default Available;