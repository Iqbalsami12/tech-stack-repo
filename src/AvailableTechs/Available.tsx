import { CiStar } from "react-icons/ci";
import type { ItechType } from "../techTypes";

const Available = ({ technologies }) => {
    return <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-3">


        {
            technologies.map((tech: ItechType) => {
                return <div>

                    <div className="card bg-base-100 w-96 shadow-sm rounded-2xl">
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
            })


        }

    </div>

        ;
};

export default Available;