import type { Dispatch, SetStateAction } from "react";
import type { ItechType } from "../techTypes";
import AvailableCards from "./AvailableCards";
interface ITechCardsProps{
     technologies:ItechType[]
         selectedTechs:ItechType[]
        setSelectedTechs:Dispatch<SetStateAction<ItechType[]>>
}


const TechCards = ({technologies, selectedTechs, setSelectedTechs}:ITechCardsProps) => {

    

    return (
        <div>
            
              <div className="grid grid-cols-3 gap-5">

        {technologies.map((tech) => (
            <AvailableCards
                key={tech.id}
                tech={tech}
                selectedTechs={selectedTechs}
                setSelectedTechs={setSelectedTechs}
            />
        ))}
            
            

            </div>
        </div>
    );
};

export default TechCards;