import { CiStar } from "react-icons/ci";
import type { ItechType } from "../techTypes";
import { useState } from "react";
import  { toast } from "react-toastify";

const AvailableCards = ({ tech}: { tech: ItechType  }) => {

    const [isSelected, setIsSelected] = useState(false)

    return (
        <div>
            <div className={`card bg-base-100  shadow-xl transition-all duration-300 shadow-xl hover:-translate-y-2  rounded-2xl flex flex-col gap-3 `} >
                <div className="flex justify-between items-center">
                    <figure className="px-10 pt-10">
                        <img
                            src={tech.icon}
                            alt="react png"
                            className="rounded-xl h-[40px] w-[40x]" />
                    </figure>
                    <button className="btn rounded-3xl " style={{ color: tech["badge-text-color"] }}> {tech.badge}</button>
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
                        <button onClick={() => {setIsSelected(true);
                            toast.success(`${tech.name} has been added to stack`);}
                        }


                            className={`btn btn-primary ${isSelected===true?"bg-gray-400 text-gray-700 ": " bg-black  text-white"} w-full`}
                            disabled={isSelected}>


                            {isSelected === true ? "Added" : "Add to Stack"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AvailableCards;