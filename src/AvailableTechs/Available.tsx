import { CiStar } from "react-icons/ci";
import type { ItechType } from "../techTypes";

const Available = ({ technologies }) => {
    return ( 
    

    <div className="grid grid-cols-3 gap-9">

        <div className=" col-span-2 mt-12">

        <div className="grid grid-cols-3 gap-5">


        {
            technologies.map((tech: ItechType) => {
                return (
                <div key={tech.id}>

                    <div className="card bg-base-100  shadow-xl transition-all duration-300 shadow-xl hover:-translate-y-2  rounded-2xl flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <figure className="px-10 pt-10">
                            <img
                                src={tech.icon}
                                alt="react png"
                                className="rounded-xl h-[40px] w-[40x]" />
                        </figure>
                        <button className="btn rounded-3xl " style={{color:tech["badge-text-color"]}}> {tech.badge}</button>
                        </div>
                        <div className="card-body items-left text-left">
                            <h2 className="card-title text-left font-bold text-[18px">{tech.name}</h2>
                            <p> {tech.description} </p>


                             <ul className="flex justify-around">
                            <li className="text-gray-500"> {tech.category} </li>
                            <li className="text-gray-400">{tech.difficulty}</li>
                            <li className="flex items-center"> <CiStar /> {tech.rating}</li>
                        </ul>


                            <div className="card-actions">
                                <button className="btn btn-primary bg-black text-white w-full">Add to Stack</button>
                            </div>
                        </div>
                         
                       </div>
                    
                    </div>
                  
                
                   
            );
                
                
            })}
            
            

            </div>

        
    </div>
    
    <div className=" mt-12 card w-96 bg-base-100 card-lg shadow-sm h-96">
  <div className="card-body">
    <h2 className="card-title">Your Stack</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary w-full border-amber-50 shadow-none bg-white">Remove</button>
    </div>
  </div>
</div>
    </div>
    );

        };

    

export default Available;