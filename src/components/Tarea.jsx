import React from "react";

export default function Tarea({ eliminar, item }) {
  return (
    <>
      <div className="bg-sky-700 rounded-xl p-3 flex items-center">
        <h3 className="w-[80%] text-[15px]">{item}</h3>
        <button
          onClick={() => eliminar(item)}
          className="w-[20%] text-[13px] bg-[#242424] flex justify-center"
        >
          Eliminar
        </button>
      </div>
    </>
  );
}
