import type { ItechType } from "../techTypes";
import AvailableCards from "./AvailableCards";

const TechCards = ({technologies}) => {

    

    return (
        <div>
            
              <div className="grid grid-cols-3 gap-5">


        {
            technologies.map((tech: ItechType) => {
                return (
                <div key={tech.id}>

                   <AvailableCards tech = {tech}></AvailableCards>
                    
                    </div>
                  
                
                   
            );
                
                
            })}
            
            

            </div>
        </div>
    );
};

export default TechCards;