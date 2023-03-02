import Tarea from "./Tarea";

function Contenido({ listTarea, eliminar, Update }) {
  return (
    <div className="mt-3 rounded-lg flex flex-col gap-3 w-[100%]">
      {listTarea.map((item, i) => (
        <Tarea key={item} eliminar={eliminar} Update={Update} item={item} i={i} />
      ))}
    </div>
  );
}

export default Contenido;
