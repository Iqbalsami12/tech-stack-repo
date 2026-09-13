import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { ItechType } from "../techTypes";
import Available from "../AvailableTechs/Available";
import AvailableCards from "../techCards/AvailableCards";
import SelectedStack from "../selectedStack/SelectedStack";

interface TechProps {
    techPromise: Promise<ItechType[]>
    selectedTechs:ItechType[]
    setSelectedTechs:Dispatch<SetStateAction<ItechType[]>>
}

const Technologies = ({techPromise}: TechProps) => {

    const technologies = use(techPromise);
    const [selectedTechs, setSelectedTechs] = useState<ItechType[]>([])
    

    return (
        <div className="container mx-auto mt-12">
           <h2 className="font-bold text-3xl">Explore The <span className="text-purple-500">Technologies</span></h2> 
           <p className="text-gray-400">Pick one technology per category to build your ideal stack</p>

        
        <div className="grid grid-cols-3 gap-9 mt-12">
            <div className="col-span-2 grid grid-cols-3 gap-5">
                 {technologies.map((tech) => (
            <AvailableCards
                key={tech.id}
                tech={tech}
                selectedTechs={selectedTechs}
                setSelectedTechs={setSelectedTechs}
            />
        ))}
            </div>
        <div className="col-span-1">
        <SelectedStack selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs}></SelectedStack>
        </div>
        </div>


        

        </div>

        

    );
};

export default Technologies;