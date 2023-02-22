import { useState } from "react";

function Formulario({ addList }) {
  const [tarea, setTarea] = useState("");

  function btn(e) {
    e.preventDefault();
    addList(tarea);
    setTarea("");
  }

  return (
    <div className="w-[100%] flex flex-col items-center">
      <form className="flex flex-col w-[90%]">
        <input
          className="py-1 px-3 outline-none bg-[#3b3b3b]"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Ingresa tarea"
        />
        <button
          className="self-baseline py-1 mt-3 m-auto bg-cyan-700"
          onClick={btn}
        >
          Añadir
        </button>
      </form>
    </div>
  );
}

export default Formulario;
