import Tarea from "./Tarea";

function Contenido({ listTarea, eliminar }) {
  return (
    <div className="mt-3 rounded-lg flex flex-col gap-3 w-[100%]">
      {listTarea.map((item) => (
        <Tarea key={item} eliminar={eliminar} item={item} />
      ))}
    </div>
  );
}

export default Contenido;
