import {useState} from "react";

export default function Tarea({ eliminar, item, Update, i }) {

  const [active, setActive] = useState(false)

  const Imput=()=>{
    const [newItem, setNewItem] = useState(item)

    const handleInput=(e)=>{
      const newTarea = (e.target.value)
      setNewItem(newTarea)
    }
    
    const addNewItem=(e)=>{
      e.preventDefault()
      setActive(false)
      Update(newItem, i)
    }

    return(
      <form className="flex">
        <input 
        className="text-black"  
        type="text" 
        onChange={handleInput}  
        value={newItem}
         />
        <button 
        onClick={addNewItem}
        className="w-[20%] text-[13px] bg-[#242424] flex justify-center ml-5">Update</button>
      </form>
    )
  }

  return (
    <>
      <div className="bg-sky-700 rounded-xl p-3 flex items-center">
          {
            active ? 
            <Imput />
            :
            <>
            <h3 className="w-[80%] text-[15px]">{item}</h3>
            <button
              onClick={() => eliminar(item)}
              className="w-[20%] text-[13px] bg-[#242424] flex justify-center"
            >
              Eliminar
            </button>
            <button
              onClick={()=>setActive(true)}
            className="w-[20%] text-[13px] bg-[#242424] flex justify-center ml-2">Editar</button>
          </>
          }
      </div>
    </>
  );
}
