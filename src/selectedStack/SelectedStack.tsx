import {  type Dispatch, type SetStateAction } from "react";
import type { ItechType } from "../techTypes";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

interface IselectedTechs{
    selectedTechs:ItechType[]
    setSelectedTechs:Dispatch<SetStateAction<ItechType[]>>
}

const SelectedStack = ({selectedTechs, setSelectedTechs}:IselectedTechs
     
) => {

    const handleRemoveTech =(tech:ItechType)=> {

        const remainingTechs=selectedTechs.filter((selectedTech)=> selectedTech.id != tech.id)

        setSelectedTechs(remainingTechs)
        toast.info(`${tech.name} has been removed`)
    }

    const handleRemoveStack =()=>{
        setSelectedTechs([])
        toast.info(`Stack has been cleared `)
    }

    return (
        <div>
             <div className=" mt-12 card w-96 bg-base-100 card-lg shadow-sm h-96">
  <div className="card-body">
    <h2 className="card-title">Your Stack</h2>
    <h3 className="text-[12px] text-gray-500"> {selectedTechs.length} technologies added </h3>

        {selectedTechs.length===0?(<p>No technologies added</p> ):(
            selectedTechs.map((tech)=>(
                <div className="flex gap-1.5 items-center" key={tech.id}>
                    <img src={tech.icon} 
                    alt={tech.name} 
                    className="h-6 w-6"
                    />
                    <p>{tech.name}</p>
                    <span  className="cursor-pointer"
                    onClick={()=> handleRemoveTech(tech) }>
                        <IoClose></IoClose>
                        </span>
                </div>)
            )

            
        )}
    
    <div className="justify-end card-actions">

      <button onClick={handleRemoveStack}
      className="btn btn-primary w-full border-amber-50 shadow-none bg-white text-red-600">Remove All</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SelectedStack;