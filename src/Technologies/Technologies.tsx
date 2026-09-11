import { use } from "react";
import type { ItechType } from "../techTypes";
import Available from "../AvailableTechs/Available";

interface TechProps {
    techPromise: Promise<ItechType[]>
}

const Technologies = ({techPromise}: TechProps) => {

    const technologies = use(techPromise);
    return (
        <div className="container mx-auto mt-12">
           <h2 className="font-bold text-3xl">Explore The <span className="text-purple-500">Technologies</span></h2> 
           <p className="text-gray-400">Pick one technology per category to build your ideal stack</p>

        <Available technologies = {technologies}></Available>

        </div>

        

    );
};

export default Technologies;