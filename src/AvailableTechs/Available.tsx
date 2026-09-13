import SelectedStack from "../selectedStack/SelectedStack";
import TechCards from "../techCards/TechCards";

const Available = ({ technologies }) => {
    return ( 
    

    <div className="grid grid-cols-3 gap-9">

        <div className=" col-span-2 mt-12">

        <TechCards technologies={technologies}></TechCards>

        
    </div>

    <SelectedStack></SelectedStack>
    
   
    </div>
    );

        };

    

export default Available;